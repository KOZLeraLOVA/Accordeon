import { Component, inject } from '@angular/core'
import { NgForOf, JsonPipe, AsyncPipe } from '@angular/common'
import { RouterLink } from '@angular/router'
import { firstValueFrom } from 'rxjs'
import { RouterLinkActive } from '@angular/router'
import { SvgIconComponent } from '../../../../common-ui/src/lib/components/svg-icon/svg-icon.component'
import { SubscriberCardComponent } from '../subscriber-card/subscriber-card.component'
import { ProfileService } from '../../../../profile/src/lib/data/services/profile.service'
import { ImgUrlPipe } from '../../../../common-ui/src/lib/pipes/img-url.pipe'

@Component({
	selector: 'app-sidebar',
	standalone: true,
	imports: [
		SvgIconComponent,
		NgForOf,
		AsyncPipe,
		RouterLink,
		ImgUrlPipe,
		SubscriberCardComponent,
		JsonPipe,
		RouterLinkActive
	],
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
	profileService = inject(ProfileService)
	subcribers$ = this.profileService.getSubscribersShortList()
	me = this.profileService.me

	menuItems = [
		{
			label: 'Моя страница',
			icon: 'home',
			link: 'profile/me'
		},
		{
			label: 'Чаты',
			icon: 'chats',
			link: 'chats'
		},
		{
			label: 'Поиск',
			icon: 'search',
			link: 'search'
		}
	]

	ngOnInit() {
		firstValueFrom(this.profileService.getMe())
	}
}
