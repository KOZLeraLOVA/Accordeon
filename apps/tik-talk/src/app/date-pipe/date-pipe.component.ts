import { Component } from '@angular/core'
//import '@angular/common/locales/global/ru';
import { DatePipe, registerLocaleData } from '@angular/common'
import localeRu from '@angular/common/locales/ru'

@Component({
	selector: 'app-root',
	templateUrl: './date-pipe.component.html',
	styleUrl: './date-pipe.component.scss'
})
export class DatePipeComponent {
	dateObject: Date = new Date()
	timestamp: number = Date.now()
	dateString: string = '2022-02-19'
}
