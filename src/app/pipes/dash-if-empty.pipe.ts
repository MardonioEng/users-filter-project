import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashIfEmpty',
  standalone: false
})
export class DashIfEmptyPipe implements PipeTransform {

  transform(value: any): string {
    const IS_EMPTY = value === null || value === undefined || value === '';

    return IS_EMPTY ? '-' : value;
  }

}
