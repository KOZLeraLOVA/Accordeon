import {
	Component,
	ElementRef,
	HostListener,
	inject,
	input,
	Renderer2,
	ViewChild
} from '@angular/core'
import { ChatWorkspaceMessageComponent } from '../chat-workspace-message/chat-workspace-message.component'
import { firstValueFrom, fromEvent, Subscription, switchMap, timer } from 'rxjs'
import { Chat } from '../../data/interfaces/chats.interface'
import { ChatsService } from '../../data/services/chats.service'

@Component({
	selector: 'app-chat-workspace-messages-wrapper',
	imports: [ChatWorkspaceMessageComponent],
	templateUrl: './chat-workspace-messages-wrapper.component.html',
	styleUrl: './chat-workspace-messages-wrapper.component.scss'
})
export class ChatWorkspaceMessagesWrapperComponent {
	chatsService = inject(ChatsService)
	hostElement = inject(ElementRef)
	r2 = inject(Renderer2)

	chat = input.required<Chat>()

	@HostListener('window:resize')
	onWindowResize() {
		this.resizeFeed()
	}

	@ViewChild('messagesWrapper') messagesWrapper!: ElementRef

	scrollToBottom() {
		setTimeout(() => {
			if (this.messagesWrapper) {
				this.messagesWrapper.nativeElement.scrollTo({
					top: this.messagesWrapper.nativeElement.scrollHeight,
					behavior: 'smooth'
				})
			}
		}, 0)
	}

	sourceSub!: Subscription

	ngAfterViewInit() {
		this.sourceSub = timer(0, 10000)
			.pipe(
				switchMap(() => {
					return this.chatsService.getChatById(this.chat().id)
				})
			)
			.subscribe()

		this.resizeFeed()
		fromEvent(window, 'resize')
	}

	ngOnDestroy() {
		this.sourceSub.unsubscribe()
	}

	resizeFeed() {
		const { top } = this.hostElement.nativeElement.getBoundingClientRect()

		const height = window.innerHeight - top - 16 - 16

		this.r2.setStyle(this.hostElement.nativeElement, 'height', `${height}px`)
	}

	async onSendMessage(messageText: string) {
		await firstValueFrom(
			this.chatsService.sendMessage(this.chat().id, messageText)
		)

		await firstValueFrom(this.chatsService.getChatById(this.chat().id))
		this.scrollToBottom()
	}
}
