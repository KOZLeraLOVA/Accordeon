import {
	ChatConnectionWSParams,
	ChatWSService
} from '../interfaces/chat-ws-service.interface'

export class ChatWSNativeService implements ChatWSService {
	#socket: WebSocket | null = null

	connect(params: ChatConnectionWSParams) {
		if (this.#socket) return

		this.#socket = new WebSocket(params.url, [params.token])

		this.#socket.onmessage = (event: MessageEvent) => {
			console.log('Received message', event)
			params.handleMessage(JSON.parse(event.data))
		}

		this.#socket.onclose = () => {
			console.log('А чего это вы тут делаете? Кино - то давно заклнчилось!')
		}
	}
	sendMessage(text: string, chatId: number) {
		this.#socket?.send(
			JSON.stringify({
				text,
				chat_Id: chatId
			})
		)
	}
	disconnect() {
		this.#socket?.close()
	}
}
