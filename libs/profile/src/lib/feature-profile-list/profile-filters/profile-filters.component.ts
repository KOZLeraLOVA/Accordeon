import { Component, inject } from '@angular/core'
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'
import { ProfileService } from '../../data/services/profile.service'
import { debounceTime, startWith, switchMap } from 'rxjs'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { SvgIconComponent } from '../../../../../common-ui/src/lib/components/svg-icon/svg-icon.component'

import { AsyncPipe } from '@angular/common'

@Component({
	selector: 'app-profile-filters',
	imports: [ReactiveFormsModule, SvgIconComponent, AsyncPipe],
	templateUrl: './profile-filters.component.html',
	styleUrl: './profile-filters.component.scss'
})
export class ProfileFiltersComponent {
	fb = inject(FormBuilder)
	profileService = inject(ProfileService)
	searchForm = this.fb.group({
		firstName: [''],
		lastName: [''],
		city: [''],
		stack: ['']
	})

	constructor() {
		this.searchForm.valueChanges
			.pipe(
				startWith({}),
				debounceTime(300),
				switchMap((formValue) => {
					return this.profileService.filterProfiles(formValue)
				}),
				takeUntilDestroyed()
			)
			.subscribe()
	}
}
