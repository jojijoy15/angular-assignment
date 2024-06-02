import { Pipe, PipeTransform } from '@angular/core';
import { ProductType } from '../../../component/product/product.type';
import { SidePanelDetails } from '../../../services/model/side-panel-details.type';

@Pipe({
  name: 'productsFilter',
  standalone: true
})
export class ProductsFilterPipe implements PipeTransform {

  transform(products: ProductType[], sidePanelDetails: SidePanelDetails): ProductType[] {
    if(products) {
      console.log(sidePanelDetails.rating)
       let filteredProducts = products.filter(
          e =>  e.price >= sidePanelDetails.start && e.price <= sidePanelDetails.end
              && e.rating >= Math.min(...sidePanelDetails.rating)
        )
        return [...filteredProducts];
    }
    return [];
  }



}
