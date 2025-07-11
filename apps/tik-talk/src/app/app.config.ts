import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'
import { provideRouter } from '@angular/router'
import { provideHttpClient, withInterceptors } from '@angular/common/http'
import { routes } from './app.routes'
import { authTokenInterceptor } from '../../../../libs/auth/src'
import { provideStore } from '@ngrx/store'
import { provideEffects } from '@ngrx/effects'

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		provideHttpClient(withInterceptors([authTokenInterceptor])),
		provideStore(),
		provideEffects()
	]
}
