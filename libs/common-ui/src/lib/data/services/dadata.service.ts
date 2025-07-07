import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { DADATA_TOKEN } from './DADATA_TOKEN'

@Injectable({
	providedIn: 'root'
})
export class DadataService {
	#apiUrl =
		'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address'
	#http = inject(HttpClient)

	getSuggestion(query: string) {
		return this.#http.post(
			this.#apiUrl,
			{ query },
			{
				headers: {
					Authorization: `Token ${DADATA_TOKEN}`
				}
			}
		)
	}
}
