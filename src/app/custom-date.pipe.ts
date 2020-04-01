import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: number, customFormat = 'mm:ss'): string {
    return moment.utc(value).format(customFormat);
  }

}
