import { Component, Input } from '@angular/core'
import { ImgUrlPipe } from '../../../../../common-ui/src/lib/pipes/img-url.pipe'
import { Profile } from '../../../../../interface/src/lib/profile/profile.interface'
@Component({
	selector: 'app-profile-card',
	imports: [ImgUrlPipe],
	templateUrl: './profile-card.component.html',
	styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {
	@Input() profile!: Profile
}
