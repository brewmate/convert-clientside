import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonPretty'
})
export class JsonPrettyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return undefined;
    }
    return JSON.stringify(value, null, 2);
  }

}
