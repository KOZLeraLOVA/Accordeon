import { Routes } from '@angular/router'
import { FormsExperimentComponent } from './src/experimental/forms-experiment/forms-experiment.component'
import { LoginPageComponent } from '../../../../libs/auth/src/lib/feature-login/login-page/login-page.component'
import { canActivateAuth } from '../../../../libs/auth/src/lib/auth/access.guard'
import { ProfilePageComponent } from '../../../../libs/profile/src/lib/feature-profile-page/profile-page/profile-page.component'
import { SettingsPageComponent } from '../../../../libs/profile/src/lib/feature-profile-settings/settings-page/settings-page.component'
import { chatsRoutes } from '../../../../libs/chats/src/lib/feature-chats-workspace'
import { LayoutComponent } from '../../../../libs/layout/src/lib/layout/layout.component'
import { SearchPageComponent } from '../../../../libs/profile/src/lib/feature-profile-list/search-page/search-page.component'
import { provideState } from '@ngrx/store'
import { provideEffects } from '@ngrx/effects'
import { postFeature } from '../../../../libs/posts/src/lib/data/store/posts.reducer'
import { PostEffects } from '../../../../libs/posts/src'
import {
	ProfileEffects,
	profileFeature
} from '../../../../libs/data-access/src'

export const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{ path: '', redirectTo: 'profile/me', pathMatch: 'full' },
			{
				path: 'profile/:id',
				component: ProfilePageComponent,
				providers: [provideState(postFeature), provideEffects(PostEffects)]
			},
			{
				path: 'search',
				component: SearchPageComponent,
				providers: [
					provideState(profileFeature),
					provideEffects(ProfileEffects)
				]
			},
			{ path: 'profile/:id', component: ProfilePageComponent },
			{ path: 'settings', component: SettingsPageComponent },
			{ path: 'chats', loadChildren: () => chatsRoutes }
		],
		canActivate: [canActivateAuth]
	},
	{ path: 'login', component: LoginPageComponent },
	{ path: 'experiment', component: FormsExperimentComponent }
]
