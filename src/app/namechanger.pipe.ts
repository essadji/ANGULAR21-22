import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namechanger'
})
export class NamechangerPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value+ ` uit ${value}land`;
  }

}
