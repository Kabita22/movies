import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recommended'
})
export class RecommendedPipe implements PipeTransform {

  transform(rating: number, args?: any): any {
    return rating > 3 ? rating+" Recommended": rating;
  }

}
