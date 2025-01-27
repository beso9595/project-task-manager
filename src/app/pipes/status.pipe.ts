import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  standalone: true
})
export class StatusPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.replaceAll('_', ' ');
  }

}
