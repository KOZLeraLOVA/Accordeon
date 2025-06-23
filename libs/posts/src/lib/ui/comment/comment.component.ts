import { Component, input } from '@angular/core'
import { AvatarCircleComponent } from '../../../../../common-ui/src/lib/components/avatar-circle/avatar-circle.component'
import { DatePipe } from '@angular/common'
import { PostComment } from '../../data'

@Component({
	selector: 'app-comment',
	imports: [AvatarCircleComponent, DatePipe],
	templateUrl: './comment.component.html',
	styleUrl: './comment.component.scss'
})
export class CommentComponent {
	comment = input<PostComment>()
}
