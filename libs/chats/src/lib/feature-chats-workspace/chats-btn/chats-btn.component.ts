import { Component, input } from '@angular/core'

import { LastMessageRes } from '../../data/interfaces/chats.interface'
import { AvatarCircleComponent } from '../../../../../common-ui/src/lib/components/avatar-circle/avatar-circle.component'

@Component({
	selector: 'button[chats]',
	imports: [AvatarCircleComponent],
	templateUrl: './chats-btn.component.html',
	styleUrl: './chats-btn.component.scss'
})
export class ChatsBtnComponent {
	chat = input<LastMessageRes>()
}
