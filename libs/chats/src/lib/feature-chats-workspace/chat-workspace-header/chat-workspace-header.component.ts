import { Component, input } from '@angular/core'
import { AvatarCircleComponent } from '../../../../../common-ui/src/lib/components/avatar-circle/avatar-circle.component'
import { Profile } from '../../../../../interface/src/lib/profile/profile.interface'

@Component({
	selector: 'app-chat-workspace-header',
	imports: [AvatarCircleComponent],
	templateUrl: './chat-workspace-header.component.html',
	styleUrl: './chat-workspace-header.component.scss'
})
export class ChatWorkspaceHeaderComponent {
	profile = input.required<Profile>()
}
