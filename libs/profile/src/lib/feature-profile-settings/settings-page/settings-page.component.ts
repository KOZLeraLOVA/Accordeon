import { Component, effect, inject, ViewChild } from '@angular/core'
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms'
import { firstValueFrom } from 'rxjs'
import { AvatarUploadComponent } from '../../ui/avatar-upload/avatar-upload.component'
import { ProfileHeaderComponent } from '../../ui/profile-header/profile-header.component'
import {
	AddressInputComponent,
	StackInputComponent
} from '../../../../../common-ui/src/lib/components'
import { ProfileService } from '@tt/data-access'

@Component({
	selector: 'app-settings-page',
	imports: [
		ProfileHeaderComponent,
		ReactiveFormsModule,
		AvatarUploadComponent,
		StackInputComponent,
		AddressInputComponent
	],
	templateUrl: './settings-page.component.html',
	styleUrl: './settings-page.component.scss'
})
export class SettingsPageComponent {
	fb = inject(FormBuilder)
	profileService = inject(ProfileService)

	@ViewChild(AvatarUploadComponent) avatarUploader!: AvatarUploadComponent

	form = this.fb.group({
		firstName: ['', Validators.required],
		lastName: ['', Validators.required],
		username: [{ value: '', disabled: true }, Validators.required],
		description: [''],
		stack: [''],
		city: [null]
	})

	constructor() {
		effect(() => {
			//@ts-ignore
			this.form.patchValue({
				...this.profileService.me()
			})
		})
	}

	onSave() {
		this.form.markAllAsTouched()
		this.form.updateValueAndValidity()

		if (this.form.invalid) return

		if (this.avatarUploader.avatar) {
			firstValueFrom(
				this.profileService.uploadAvatar(this.avatarUploader.avatar)
			)
		}

		firstValueFrom(
			//@ts-ignore
			this.profileService.patchProfile({
				...this.form.value
			})
		)
	}
}
