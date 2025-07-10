import { createSelector } from '@ngrx/store'
import { profileFeature } from './reducer'
import { Profile } from '@tt/interface/profile/profile.interface'

export const selectFilteredProfiles = createSelector(
	profileFeature.selectProfiles,
	(profiles) => profiles
)

export const selectedMeProfile = createSelector(
	profileFeature.selectMe,
	(me: Profile | null) => me
)
