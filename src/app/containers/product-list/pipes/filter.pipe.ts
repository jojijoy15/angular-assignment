import { Pipe, PipeTransform } from '@angular/core';
import { ProductType } from '../../../component/product/product.type';
import { SidePanelDetails } from '../../../services/model/side-panel-details.type';
import { CurrencyStoreService } from '../../../services/currency-store.service';
import { CurrencyRateInfo } from '../../../component/currency/models/currency.type';

@Pipe({
  name: 'productsFilter',
  standalone: true
})
export class ProductsFilterPipe implements PipeTransform {


  private currencyInfo!: CurrencyRateInfo;
  constructor(private currencyService: CurrencyStoreService) {}

  transform(products: ProductType[], sidePanelDetails: SidePanelDetails): ProductType[] {
    this.currencyService.currencyObservable.subscribe(data => this.currencyInfo = data as unknown as CurrencyRateInfo)
    if(products) {
      let filteredProducts = products.filter(
        e => {
          let productPrice = e.price * this.currencyInfo.rate;
          return productPrice >= sidePanelDetails.start 
            && productPrice <= sidePanelDetails.end
            && e.rating >= Math.min(...sidePanelDetails.rating)
      });
      return [...filteredProducts];
    }
    return [];
  }



}
