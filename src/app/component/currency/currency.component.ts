import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyStoreService } from '../../services/currency-store.service';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-currency',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.css',
  providers: []
})
export class CurrencyComponent implements OnInit {

  private DEFAULT_CURRENCY_CODE:string = "INR";

  currencyCodes!: string[]
  currencyStore = inject(CurrencyStoreService);

  ngOnInit(): void {
    this.currencyCodes = this.currencyStore.fetchAllCurrencyDisplayCodes();
    this.saveCurrencyCode(this.DEFAULT_CURRENCY_CODE);
  }


  saveCurrencyCodeOnChange(event: Event) {
    let select = event.target as HTMLSelectElement;
    this.saveCurrencyCode(select.value);
  }

  private saveCurrencyCode(code:string) {
    this.currencyStore.updateCurrencyCode(code);
  }



  //TODO Fetch currency rate value from api call
  /* mapCurrencies() {
    this.currencyService.fetchExchangeRateForInr()
      .subscribe({
        next: currencyRateResponse => {
          console.log(`Value is ${currencyRateResponse.inr.keys}`)
          this.currencyCodes.forEach((currencyCode: string, currencyName: string) => {
            let converstionRate = currencyRateResponse.inr.get(currencyCode);
            this.currencyRates.set(currencyName, converstionRate);
          })
        },
        error: error => console.log(error)
      });
  }  */
}
