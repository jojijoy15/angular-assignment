import { Component, Input, OnInit, inject } from '@angular/core';
import { ProductType } from '../product.type';
import { ProductComponent } from '../product.component';
import { CommonModule } from '@angular/common';
import { DiscountPipe } from './pipes/discount.pipe';
import { CurrencyStoreService } from '../../../services/currency-store.service';
import { CurrencyRateInfo } from '../../currency/models/currency.type';

@Component({
  selector: 'app-price-detail',
  standalone: true,
  imports: [CommonModule, DiscountPipe],
  templateUrl: './price-detail.component.html',
  styleUrl: './price-detail.component.css'
})
export class PriceDetailComponent implements OnInit {

  @Input() currencyInfo!: CurrencyRateInfo;
  @Input() productInfo!: ProductType;


  ngOnInit(): void {}
  
  getProductPrice() {
    return this.productInfo.price * this.currencyInfo.rate;
  }
}
