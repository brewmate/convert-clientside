import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round'
})
export class RoundPipe implements PipeTransform {

  transform(value: number, precision = -1): any {
    if (!value) {
      return undefined;
    }

    const factor = Math.pow(10, precision);
    const tempNumber = value * factor;
    const roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
  }

}
