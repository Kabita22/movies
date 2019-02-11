import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstAlphabetToUpper'
})
export class FirstAlphabetToUpperPipe implements PipeTransform {

  transform(username: string, args?: any): any {
    return username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();
  }

}
