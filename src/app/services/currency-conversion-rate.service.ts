import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CurrencyRate } from './model/currency-rate.type';
import { tap } from 'rxjs';

@Injectable()
export class CurrencyConversionRateService {

  constructor(private httpClient: HttpClient) { }

  fetchExchangeRateForInr() {
    const currencyRateUrl = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json';
    return this.httpClient.get<CurrencyRate>(currencyRateUrl, { responseType: 'json' });
  }

}
