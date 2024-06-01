import { Injectable } from '@angular/core';
import { currencyRates } from "../../assets/CurrencyRateConfig"
import { BehaviorSubject } from 'rxjs';
import { CurrencyRate } from './model/currency-rate.type';

@Injectable({
  providedIn: 'root'
})
export class CurrencyStoreService {

  private DEFAULT_CURRENCY_CODE:string = "INR";
  private CURRENCY_CODE_STORAGE_KEY = "CURRENCY_CODE";
  private currencyCodesConfig = currencyRates;
  private currencySubject = new BehaviorSubject
  (this.currencyCodesConfig.at(0));
  currencyObservable = this.currencySubject.asObservable();

  updateCurrencyCode(currencyCode: string) {
     localStorage.setItem("currencyCode", currencyCode)
     let currencyRate = this.fetchCurrencyInfo(currencyCode)
     this.currencySubject.next(currencyRate);
  }

  fetchCurrencyCode() {
    let currencyCodeFromLocalStorage = localStorage.getItem(this.CURRENCY_CODE_STORAGE_KEY)

    let currentCurrencyCode = currencyCodeFromLocalStorage 
      ? currencyCodeFromLocalStorage 
      : this.DEFAULT_CURRENCY_CODE;
    
    this.currencySubject.next(this.fetchCurrencyInfo(currentCurrencyCode));
    
  }

  fetchAllCurrencyDisplayCodes() {
    return this.currencyCodesConfig.map(e => e.display);
  }

  fetchCurrencyInfo(currentCurrencyCode: string) {
    return this.currencyCodesConfig
        .find(e => e.display === currentCurrencyCode);
  }
}
