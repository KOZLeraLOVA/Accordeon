import { Component, inject } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ChatsService } from '../../data/services/chats.service'
import { AsyncPipe } from '@angular/common'
import { ChatsPageComponent } from '../chats-page/chats.component'
import { ChatsBtnComponent } from '../chats-btn/chats-btn.component'

@Component({
	selector: 'app-chats-list',
	imports: [
		ChatsBtnComponent,
		FormsModule,
		ReactiveFormsModule,
		AsyncPipe,
		ChatsPageComponent
	],
	templateUrl: './chats-list.component.html',
	styleUrl: './chats-list.component.scss'
})
export class ChatsListComponent {
	chatsService = inject(ChatsService)

	chats$ = this.chatsService.getMyChats()
}
