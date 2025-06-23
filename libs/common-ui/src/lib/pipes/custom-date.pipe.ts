import { DatePipe } from '@angular/common'
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name: 'customDate',
	standalone: true
})
export class CustomDatePipe implements PipeTransform {
	private datePipe = new DatePipe('ru-Ru')

	transform(value: any): string | null {
		return this.datePipe.transform(value, 'MMM d, y')
	}
}
