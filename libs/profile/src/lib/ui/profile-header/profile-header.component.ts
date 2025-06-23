import { Component, input } from '@angular/core'

import { ImgUrlPipe } from '../../../../../common-ui/src/lib/pipes'
import { AvatarCircleComponent } from '../../../../../common-ui/src/lib/components'
import { Profile } from '../../../../../interface/src/lib/profile/profile.interface'

@Component({
	selector: 'app-profile-header',
	standalone: true,
	imports: [ImgUrlPipe, AvatarCircleComponent],
	templateUrl: './profile-header.component.html',
	styleUrl: './profile-header.component.scss'
})
export class ProfileHeaderComponent {
	profile = input<Profile>()
}
