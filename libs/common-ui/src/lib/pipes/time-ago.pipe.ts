import { Pipe, PipeTransform } from '@angular/core'
import { DateTime } from 'luxon'

@Pipe({
	name: 'timeAgo',
	pure: false
})
export class TimeAgoPipe implements PipeTransform {
	transform(
		value: string,
		locale: string = 'ru',
		timeZone: string = 'Europe/Moscow'
	): string {
		if (!value) return ''

		const date = DateTime.fromISO(value, { zone: 'utc' })
			.setZone(timeZone)
			.setLocale(locale)

		const now = DateTime.now().setZone(timeZone).setLocale(locale)

		const diff = now
			.diff(date, ['years', 'months', 'days', 'hours', 'minutes', 'seconds'])
			.toObject()

		if (diff.years && diff.years >= 1)
			return `${Math.floor(diff.years)} лет назад`
		if (diff.months && diff.months >= 1)
			return `${Math.floor(diff.months)} мес. назад`
		if (diff.days && diff.days >= 1) return `${Math.floor(diff.days)} дн. назад`
		if (diff.hours && diff.hours >= 1)
			return `${Math.floor(diff.hours)} ч. назад`
		if (diff.minutes && diff.minutes >= 1)
			return `${Math.floor(diff.minutes)} мин назад`
		return `только что`
	}
}
;``
