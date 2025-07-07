import {
	Post,
	PostComment,
	PostCreateDto
} from '../../../../../data-access/src/lib/posts/interfaces/post.interface'
import { createFeature, createReducer, on } from '@ngrx/store'
import { postActions } from '../store/posts.actions'

export interface PostState {
	posts: Post[]
	comments: Record<number, PostComment[]> // комментарии по id поста
}

export const initialState: PostState = {
	posts: [],
	comments: []
}

export const postFeature = createFeature({
	name: 'Post',
	reducer: createReducer(
		initialState,
		on(postActions.postsLoaded, (state, { posts }) => ({
			...state,
			posts
		})),

		// on(postActions.createPost, (state, { post }) => ({
		// 	...state,
		// 	posts: [...state.posts, post]
		// })),

		on(postActions.commentsLoaded, (state, { comments }) => {
			const stateComments = { ...state.comments }

			if (comments.length) {
				stateComments[comments[0].postId] = comments
			}
			return {
				...state,
				comments: stateComments
			}
		})
	)
})
