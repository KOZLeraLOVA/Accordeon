import {
	Component,
	ElementRef,
	HostListener,
	inject,
	Renderer2
} from '@angular/core'
import { ProfileService } from '../../data/services/profile.service'
import { fromEvent } from 'rxjs'
import { ProfileCardComponent } from '../../ui/profile-card/profile-card.component'
import { ProfileFiltersComponent } from '../profile-filters/profile-filters.component'

@Component({
	selector: 'app-search-page',
	imports: [ProfileCardComponent, ProfileFiltersComponent],
	templateUrl: './search-page.component.html',
	styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
	profileService = inject(ProfileService)
	profiles = this.profileService.filteredProfiles
	hostElement = inject(ElementRef)
	r2 = inject(Renderer2)

	@HostListener('window:resize')
	onWindowResize() {
		this.resizeFeed()
	}

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
