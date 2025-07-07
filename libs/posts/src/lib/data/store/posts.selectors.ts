import { createSelector } from '@ngrx/store'
import { Post } from '../../../../../data-access/src/lib/posts/interfaces/post.interface'
import { postFeature } from './posts.reducer'

export const selectAllPosts = createSelector(
	postFeature.selectPosts,
	(posts) => posts
)

export const selectCommentsByPostId = (postId: number) =>
	createSelector(postFeature.selectComments, (comments) => comments[postId])
