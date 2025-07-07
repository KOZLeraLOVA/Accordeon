import { createFeature, createReducer, on } from '@ngrx/store'
import { Profile } from '../../../../../interface/src/lib/profile/profile.interface'
import { profileActions } from './actions'

export interface ProfileState {
	profiles: Profile[]
	profileFilters: Record<string, any>
}

export const initialState: ProfileState = {
	profiles: [],
	profileFilters: {}
}

export const profileFeature = createFeature({
	name: 'profileFeature',
	reducer: createReducer(
		initialState,
		on(profileActions.profilesLoaded, (state, payload) => {
			return {
				...state,
				profiles: payload.profiles
			}
		})
	)
})
