import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateGenerator'
})
export class DateGeneratorPipe implements PipeTransform {

  transform(value: valueTypes, extraValue = 0): Date {
    if(value === 'now') {
      return new Date();
    }
    if(value === 'currentMonthStart') {
      let date = new Date();
      date.setDate(1);
      return date;
    }
    if(value === 'currentMonthEnd') {
      let date = new Date();
      date.setDate(1);
      date.setMonth(date.getMonth() + 1);
      date.setHours(0);
      date.setMinutes(0);
      date.setSeconds(-1);
      return date;
    }
    if(value === 'monthAgo') {
      let date = new Date();
      date.setMonth(date.getMonth() - 1);
      return date;
    }
    if(value === 'year') {
      let date = new Date();
      date.setFullYear(date.getFullYear() + extraValue);
      return date;
    }
  }
}

type valueTypes =  'now' | 'currentMonthStart' | 'currentMonthEnd' | 'monthAgo' | 'year';
