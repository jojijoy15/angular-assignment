import { Component, OnInit, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { SidePanelService } from '../../../services/side-panel.service';
import { CurrencyStoreService } from '../../../services/currency-store.service';
import { CurrencyRate } from '../../currency/models/currency.type';

@Component({
  selector: 'app-price-range',
  standalone: true,
  imports: [MatSliderModule, ReactiveFormsModule],
  templateUrl: './price-range.component.html',
  styleUrl: './price-range.component.css'
})
export class PriceRangeComponent implements OnInit {

  private INITIAL_START_PRICE = 0;
  private INITIAL_END_PRICE = 3000;
  private INITIAL_STEP = 500;

  startPriceMin = this.INITIAL_START_PRICE;
  endPriceMax = this.INITIAL_END_PRICE;
  step = this.INITIAL_STEP;
  startPriceRange: FormControl = new FormControl(0);
  endPriceRange: FormControl = new FormControl(3000); 
  currencyInfo!:CurrencyRate;

  private startPrice!: number;
  private endPrice!: number;

  sidePanelService = inject(SidePanelService);
  currencyService = inject(CurrencyStoreService)

  ngOnInit(): void {
    this.currencyService.currencyObservable.subscribe(
      data => {
        this.currencyInfo = data as CurrencyRate;
        this.startPriceMin = this.INITIAL_START_PRICE * this.currencyInfo.rate;
        this.endPriceMax = this.INITIAL_END_PRICE * this.currencyInfo.rate;
        this.step = this.INITIAL_STEP * this.currencyInfo.rate;
        this.startPriceRange.patchValue(this.startPriceMin);
        this.endPriceRange.patchValue(this.endPriceMax);
      }
    );
  }

  checkDetails(event: Event) {
    this.startPriceRange.valueChanges.subscribe(data => this.startPrice = data)
    this.endPriceRange.valueChanges.subscribe(data => this.endPrice = data);
    this.sidePanelService.updateProductDetails(this.createSidePanelDetails())
  }

  private createSidePanelDetails() {
    return { 
      start: this.startPrice ??= 0,
      end: this.endPrice ??= 3000,
      productName: "",
      rating: 0
    }
  }
}
