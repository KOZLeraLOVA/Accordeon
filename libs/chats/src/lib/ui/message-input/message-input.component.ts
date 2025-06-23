import {
	Component,
	EventEmitter,
	inject,
	Output,
	Renderer2
} from '@angular/core'
import { ProfileService } from '../../../../../profile/src/lib/data/services/profile.service'
import { NgIf } from '@angular/common'
import { SvgIconComponent } from '../../../../../common-ui/src/lib/components'
import { AvatarCircleComponent } from '../../../../../common-ui/src/lib/components'
import { FormsModule } from '@angular/forms'

@Component({
	selector: 'app-message-input',
	imports: [NgIf, SvgIconComponent, FormsModule, AvatarCircleComponent],
	templateUrl: './message-input.component.html',
	styleUrl: './message-input.component.scss'
})
export class MessageInputComponent {
	r2 = inject(Renderer2)
	me = inject(ProfileService).me

	@Output() created = new EventEmitter<string>() ///{ВСЕ КРОМЕ STRING ДОБАВЛЕНО}

	postText = ''

	onTextAreaInput(event: Event) {
		const textarea = event.target as HTMLTextAreaElement

		this.r2.setStyle(textarea, 'height', 'auto')
		this.r2.setStyle(textarea, 'height', textarea.scrollHeight + 'px')
	}

	onCreatePost() {
		if (!this.postText) return

		this.created.emit(this.postText)
		this.postText = ''
	}
}
