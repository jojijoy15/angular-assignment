import { Pipe, PipeTransform } from '@angular/core';
import { ProductType } from '../../../component/product/product.type';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {

  transform(products: any[], field: string): ProductType[] {
    if(products && Array.isArray(products)) {
      products
      .sort((p1, p2) => {
        if(p1[field] > p2[field]) {
          return -1; //Higher the Rating, higher the order
        } else if (p1[field] < p2[field]) {
          return 1;
        } else {
          return 0;
        }
      });
    }
    return products;
  }

}
