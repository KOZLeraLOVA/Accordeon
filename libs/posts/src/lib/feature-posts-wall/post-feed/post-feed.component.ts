import {
	Component,
	ElementRef,
	HostListener,
	inject,
	Input,
	Renderer2
} from '@angular/core'
import { PostInputComponent } from '../../ui/post-input/post-input.component'
import { PostComponent } from '../post/post.component'
import { firstValueFrom, fromEvent } from 'rxjs'
import { Store } from '@ngrx/store'
import { selectAllPosts } from '../../data/store/posts.selectors'
import { postActions } from '../../data/store/posts.actions'

import { GlobalStoreService } from 'libs/shared/src/lib/data/service/global-store.service'
import { PostCreateDto } from '../../../../../data-access/src/lib/posts/interfaces/post.interface'
import { PostService } from '../../../../../data-access/src/lib/posts/services/post.service'

@Component({
	selector: 'app-post-feed',
	imports: [PostInputComponent, PostComponent],
	templateUrl: './post-feed.component.html',
	styleUrl: './post-feed.component.scss'
})
export class PostFeedComponent {
	hostElement = inject(ElementRef)
	r2 = inject(Renderer2)
	postService = inject(PostService)

	store = inject(Store)
	profile = inject(GlobalStoreService).me
	feed = this.store.selectSignal(selectAllPosts)

	@Input() isCommentInput = false
	@Input() postId: number = 0
	@HostListener('window:resize')
	onWindowResize() {
		this.resizeFeed()
	}

	ngOnInit() {
		this.store.dispatch(postActions.fetchPosts({}))
	}

	// constructor() {
	// 	this.loadPosts()
	// }

	onCreatePost(postText: string) {
		this.store.dispatch(
			postActions.createPost({
				payload: {
					title: 'Клевый пост',
					content: postText,
					authorId: this.profile()!.id
				}
			})
		)
		firstValueFrom(
			this.postService.createPost({
				title: 'Клевый пост',
				content: postText,
				authorId: this.profile()!.id
			})
		)
	}

	// 	if (!postText) return
	//
	// 	this.store.dispatch(
	// 		postActions.createPost({
	// 			payload: {
	// 				title: 'Клевый пост',
	// 				content: postText,
	// 				authorId: this.profile()!.id
	// 			}
	// 		})
	// 	)
	// }

	ngAfterViewInit() {
		this.resizeFeed()

		fromEvent(window, 'resize').subscribe(() => {
			console.log(12345)
		})
	}

	resizeFeed() {
		const { top } = this.hostElement.nativeElement.getBoundingClientRect()

		const height = window.innerHeight - top - 24 - 24
		this.r2.setStyle(this.hostElement.nativeElement, 'height', `${height}px`)
	}
}
