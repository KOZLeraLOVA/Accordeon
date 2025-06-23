import { Component, inject, input, OnInit, signal } from '@angular/core'
import { Post, PostComment, PostService } from '../../data'
import { TimeAgoPipe } from '../../../../../common-ui/src/lib/pipes/time-ago.pipe'
import { SvgIconComponent } from '../../../../../common-ui/src/lib/components/svg-icon/svg-icon.component'
import { AvatarCircleComponent } from '../../../../../common-ui/src/lib/components/avatar-circle/avatar-circle.component'
import { DatePipe } from '@angular/common'
import { CommentComponent, PostInputComponent } from '../../ui'
import { firstValueFrom } from 'rxjs'

@Component({
	selector: 'app-post',
	imports: [
		AvatarCircleComponent,
		DatePipe,
		SvgIconComponent,
		PostInputComponent,
		CommentComponent,
		TimeAgoPipe
	],
	templateUrl: './post.component.html',
	styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {
	post = input<Post>()

	comments = signal<PostComment[]>([])

	postService = inject(PostService)

	async ngOnInit() {
		this.comments.set(this.post()!.comments)
	}

	async onCreated() {
		const comments = await firstValueFrom(
			this.postService.getCommentsByPostId(this.post()!.id)
		)
		this.comments.set(comments)
	}
}

const now = new Date()
const formattedDate = now.toLocaleString('en-US', { dateStyle: 'short' })
