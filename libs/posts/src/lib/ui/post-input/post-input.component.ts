import {
	Component,
	EventEmitter,
	HostBinding,
	inject,
	input,
	Output,
	Renderer2
} from '@angular/core'
import {
	AvatarCircleComponent,
	SvgIconComponent
} from '../../../../../common-ui/src/lib/components'
import { NgIf } from '@angular/common'
import { PostService } from '../../data'
import { firstValueFrom } from 'rxjs'
import { FormsModule } from '@angular/forms'
import { GlobalStoreService } from '../../../../../shared/src/lib/data/service/global-store.service'

@Component({
	selector: 'app-post-input',
	standalone: true,
	imports: [AvatarCircleComponent, NgIf, SvgIconComponent, FormsModule],
	templateUrl: './post-input.component.html',
	styleUrl: './post-input.component.scss'
})
export class PostInputComponent {
	r2 = inject(Renderer2)
	postService = inject(PostService)

	isCommentInput = input(false)
	postId = input<number>(0)
	profile = inject(GlobalStoreService).me

	@Output() created = new EventEmitter()

	@HostBinding('class.comment')
	get isComment() {
		return this.isCommentInput()
	}

	postText = ''

	onTextAreaInput(event: Event) {
		const textarea = event.target as HTMLTextAreaElement

		this.r2.setStyle(textarea, 'height', 'auto')
		this.r2.setStyle(textarea, 'height', textarea.scrollHeight + 'px')
	}

	onCreatePost() {
		if (!this.postText) return

		if (this.isCommentInput()) {
			firstValueFrom(
				this.postService.createComment({
					text: this.postText,
					authorId: this.profile()!.id,
					postId: this.postId()
				})
			).then(() => {
				this.postText = ''
				this.created.emit()
			})
			return
		}

		firstValueFrom(
			this.postService.createPost({
				title: 'Клевый пост',
				content: this.postText,
				authorId: this.profile()!.id
			})
		).then(() => {
			this.postText = ''
		})
	}
}
