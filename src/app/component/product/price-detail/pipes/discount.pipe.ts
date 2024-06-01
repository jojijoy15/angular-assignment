import { Pipe, PipeTransform } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';

@Pipe({
  name: 'discount',
  standalone: true
})
export class DiscountPipe implements PipeTransform {

  transform(actualPrice: number, discountPercentage: number) {
    return actualPrice -= (actualPrice * discountPercentage)/100;
  }

}
