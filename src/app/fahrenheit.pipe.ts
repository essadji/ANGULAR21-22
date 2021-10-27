import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fahrenheit'
})
export class FahrenheitPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): any {
    let cTemp:number = value;
    let cToFahr = cTemp * 9 / 5 + 32;
      // var message = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.';
      // console.log(message);
    
    return cToFahr + " °F";
  }

}
