import { createActionGroup, emptyProps, props } from '@ngrx/store'
import {
	CommentCreateDto,
	Post,
	PostComment,
	PostCreateDto
} from '../../../../../data-access/src/lib/posts/interfaces/post.interface'

export const postActions = createActionGroup({
	source: 'Post',
	events: {
		'fetch posts': props<{ page?: number }>(), // Запрос поста с помощью actions
		'posts loaded': props<{ posts: Post[] }>(), //Действие для загрузки постов
		'create post': props<{ payload: PostCreateDto }>(), // Действие для создания постов

		'fetch comments': props<{ postId: number }>(),
		'comments loaded': props<{ postId: number; comments: PostComment[] }>(), // Загрузка комментариев для поста
		'create comment': props<{ payload: CommentCreateDto }>() // Действие для добавления комментария

		//'fetch posts': emptyProps(),
		//'loading post events': emptyProps,
		//props<{ post: PostCreateDto }>()

		//Создание комента
		//'create comment events': props<{ createComment: CommentCreateDto }>(),
		//Загрузка комментов
		//'comments loaded': props<{ comments: PostComment[] }>(),
		//Загрузка коментов к посту по id
		//'get post comments': props<{ postId: number }>()
	}
})
