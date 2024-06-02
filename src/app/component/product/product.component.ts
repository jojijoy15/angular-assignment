import { Component, Input } from '@angular/core';
import { ProductType } from './product.type';
import { CommonModule } from '@angular/common';
import { PriceDetailComponent } from './price-detail/price-detail.component';
import { CurrencyRate } from '../currency/models/currency.type';
import { RatingComponent } from './rating/rating.component';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [PriceDetailComponent, RatingComponent, MatCardModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input() productInfo!: ProductType;
  @Input() currencyInfo!: CurrencyRate;

}
