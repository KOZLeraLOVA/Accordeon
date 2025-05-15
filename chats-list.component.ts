import { Component, inject } from '@angular/core';
import {ChatsBtnComponent} from '../../chats/chats-btn/chats-btn.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChatsService } from '../../../data/services/chats.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-chats-list',
  standalone: true,
  imports: [ChatsBtnComponent, FormsModule, ReactiveFormsModule, AsyncPipe ],
  templateUrl: './chats-list.component.html',
  styleUrl: './chats-list.component.scss'
})
export class ChatsListComponent {
chatsService = inject(ChatsService)

  chats$ = this.chatsService.getMyChats()
}
