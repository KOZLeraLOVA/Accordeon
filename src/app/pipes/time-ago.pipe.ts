import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';

@Pipe({
  name: 'timeAgo',
  pure: false
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: string | Date): string {
    if (!value) return '';

    const postTime = DateTime.fromISO(value instanceof Date ? value.toISOString() : value);

const now = DateTime.local().minus({ hours: 3 });

    const diff = now.diff(postTime, ['years', 'months', 'days', 'hours', 'minutes', 'seconds']).toObject();

    if (diff.years && diff.years >= 1) return `${Math.floor(diff.years)} лет назад`;
    if (diff.months && diff.months >= 1) return `${Math.floor(diff.months)} мес. назад`;
    if (diff.days && diff.days >= 1) return `${Math.floor(diff.days)} дн. назад`;
    if (diff.hours && diff.hours >= 1) return `${Math.floor(diff.hours)} ч. назад`;
    if (diff.minutes && diff.minutes >= 1) return `${Math.floor(diff.minutes)} мин назад`;
    return `только что`;
  }
}``
