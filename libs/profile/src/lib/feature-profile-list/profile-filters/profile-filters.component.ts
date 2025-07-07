import { Component, inject } from '@angular/core'
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'
import { ProfileService } from '../../data/services/profile.service'
import { debounceTime, startWith, Subscription } from 'rxjs'
import { SvgIconComponent } from '../../../../../common-ui/src/lib/components/svg-icon/svg-icon.component'
import { AsyncPipe } from '@angular/common'
import { Store } from '@ngrx/store'
import { profileActions } from '../../data'

@Component({
	selector: 'app-profile-filters',
	imports: [ReactiveFormsModule, SvgIconComponent, AsyncPipe],
	templateUrl: './profile-filters.component.html',
	styleUrl: './profile-filters.component.scss'
})
export class ProfileFiltersComponent {
	fb = inject(FormBuilder)
	profileService = inject(ProfileService)
	store = inject(Store)
	searchForm = this.fb.group({
		firstName: [''],
		lastName: [''],
		city: [''],
		stack: ['']
	})

	searchFormSub!: Subscription

	constructor() {
		this.searchFormSub = this.searchForm.valueChanges
			.pipe(startWith({}), debounceTime(300))
			.subscribe((formValue) => {
				this.store.dispatch(profileActions.filterEvents({ filters: formValue }))
			})
	}

	ngOnDestroy() {
		this.searchFormSub.unsubscribe()
	}
}
