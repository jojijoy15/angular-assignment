import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SidePanelService } from '../../../services/side-panel.service';
import { CurrencyStoreService } from '../../../services/currency-store.service';
import { CurrencyRate } from '../../currency/models/currency.type';
import { Rating } from '../models/rating.type';

@Component({
  selector: 'app-price-range',
  standalone: true,
  imports: [MatSliderModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule, FormsModule],
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.css'
})
export class ProductFilterComponent implements OnInit {

  private INITIAL_START_PRICE = 0;
  private INITIAL_END_PRICE = 3000;
  private INITIAL_STEP = 500;

  startPriceMin = this.INITIAL_START_PRICE;
  endPriceMax = this.INITIAL_END_PRICE;
  step = this.INITIAL_STEP;

  startPriceRange: FormControl = new FormControl(0);
  endPriceRange: FormControl = new FormControl(3000); 
  rating: FormControl = new FormControl([]);
  
  currencyInfo!:CurrencyRate;
  ratingOptions: Rating[] = [ 
    { 
      display: '4★ & above',
      rating: 4
    }, 
    { 
      display: '3★ & above',
      rating: 3
    }, 
    { 
      display: '2★ & above',
      rating: 2
    }
  ]
  private startPrice!: number;
  private endPrice!: number;
  private ratings!: number[];

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
        this.rating.patchValue(this.ratings);
        this.endPriceRange.patchValue(this.endPriceMax);
      }
    );
  }

  checkDetails(event: Event) {
    this.startPriceRange.valueChanges.subscribe(data => this.startPrice = data)
    this.endPriceRange.valueChanges.subscribe(data => this.endPrice = data);
    this.sidePanelService.updateProductDetails(this.createSidePanelDetails())
  }

  onRatingSelect() {
    this.rating.valueChanges.subscribe(data => {
      if(data.length > 0) {
        console.log(`rating selected ${data}`);
        this.ratings = [...data]
      } else {
        this.ratings = [1]
      }
    });

    this.sidePanelService.updateProductDetails(this.createSidePanelDetails())
  }

  private createSidePanelDetails() {
    return { 
      start: this.startPrice ??= 0,
      end: this.endPrice ??= 3000,
      productName: "",
      rating: this.ratings ??= [1]
      //TODO fix rating filter issue
    }
  }

}
