import { HttpClient } from '@angular/common/http'
import { inject, Injectable, signal } from '@angular/core'
import { Chat, LastMessageRes, Message } from '../interfaces/chats.interface'
import { map, Observable } from 'rxjs'
import { DateTime } from 'luxon'
import { ProfileService } from '../../../../../profile/src/lib/data/services/profile.service'
import { ChatWSNativeService } from './chat-ws-native.service'
import { ChatWSService } from '../interfaces/chat-ws-service.interface'
import { AuthService } from '@tt/auth'
import { ChatWSMessage } from '../interfaces/chat-ws-message.interface'
import { isUnreadMessage, isNewMessage } from '../interfaces/type-guards'

@Injectable({
	providedIn: 'root'
})
export class ChatsService {
	http = inject(HttpClient)
	#authService = inject(AuthService)
	me = inject(ProfileService).me
	countUnreadMessages = signal<number>(0)

	wsAdapter: ChatWSService = new ChatWSNativeService()

	activeChatMessages = signal<Message[]>([])
	groupedChatMessages = signal<{ label: string; messages: Message[] }[]>([])

	baseApiUrl = 'https://icherniakov.ru/yt-course/'
	chatsUrl = `${this.baseApiUrl}chat/`
	messageUrl = `${this.baseApiUrl}message/`

	connectWS() {
		return this.wsAdapter.connect({
			url: `${this.baseApiUrl}chat/ws`,
			token: this.#authService.token ?? '',
			handleMessage: this.handleWSMessage
		}) as Observable<ChatWSMessage>
	}

	handleWSMessage = (message: ChatWSMessage) => {
		if (!('action' in message)) return

		if (isUnreadMessage(message)) {
			//this.countUnreadMessage.set(message.data.count)
			//TODO message.data.
		}

		if (isNewMessage(message)) {
			this.activeChatMessages.set([
				...this.activeChatMessages(),
				{
					id: message.data.id,
					userFromId: message.data.author,
					personalChatId: message.data.chat_id,
					text: message.data.message,
					createdAt: message.data.created_at,
					isRead: false,
					isMine: false
				}
			])
		}
	}
	createChat(userId: number) {
		return this.http.post<Chat>(`${this.chatsUrl}${userId}`, {})
	}

	getMyChats() {
		return this.http.get<LastMessageRes[]>(`${this.chatsUrl}get_my_chats/`)
	}

	getChatById(chatId: number) {
		return this.http.get<Chat>(`${this.chatsUrl}${chatId}`).pipe(
			map((chat) => {
				const patchedMessages = chat.messages.map((message) => {
					return {
						...message,
						user:
							chat.userFirst.id === message.userFromId
								? chat.userFirst
								: chat.userSecond,
						isMine: message.userFromId === this.me()!.id
					}
				})

				//todo

				const groupedMessage = this.messagesForGroup(patchedMessages)
				this.groupedChatMessages.set(groupedMessage)

				return {
					...chat,
					companion:
						chat.userFirst.id === this.me()!.id
							? chat.userSecond
							: chat.userFirst,
					messages: patchedMessages
				}
			})
		)
	}
	messagesForGroup(messages: Message[]) {
		const messagesArray = messages
		const groupedMessages = new Map<string, Message[]>()

		const today = DateTime.now().startOf('day')
		const yesterday = today.minus({ days: 1 })

		messagesArray.forEach((message: Message) => {
			const messageDate = DateTime.fromISO(message.createdAt, { zone: 'utc' })
				.setZone(DateTime.local().zone)
				.startOf('day')

			let dateLabel: string
			if (messageDate.equals(today)) {
				dateLabel = 'Сегодня'
			} else if (messageDate.equals(yesterday)) {
				dateLabel = 'Вчера'
			} else {
				dateLabel = messageDate.toFormat('dd.MM.yyyy')
			}

			if (!groupedMessages.has(dateLabel)) {
				groupedMessages.set(dateLabel, [])
			}
			groupedMessages.get(dateLabel)?.push(message)
		})

		return Array.from(groupedMessages.entries()).map(([label, messages]) => ({
			label,
			messages
		}))
	}

	sendMessage(chatId: number, message: string) {
		return this.http
			.post(
				`${this.messageUrl}send/${chatId}`,
				{},
				{
					params: { message }
				}
			)
			.pipe(
				map((response: any) => {
					return {
						text: response.text,
						timestamp: new Date(response.timestamp)
					}
				})
			)
	}
}
