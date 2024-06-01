import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyStoreService } from '../../services/currency-store.service';
import { BehaviorSubject } from 'rxjs';
import { MatOptionSelectionChange } from '@angular/material/core';

@Component({
  selector: 'app-currency',
  standalone: true,
  imports: [CommonModule],
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
