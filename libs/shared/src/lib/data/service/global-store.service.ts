import { Injectable, signal } from '@angular/core'
import { Profile } from '../../../../../interface/src/lib/profile/profile.interface'

@Injectable({
	providedIn: 'root'
})
export class GlobalStoreService {
	me = signal<Profile | null>(null)
}
