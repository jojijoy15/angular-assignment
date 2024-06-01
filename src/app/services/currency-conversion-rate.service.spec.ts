import { TestBed } from '@angular/core/testing';

import { CurrencyConversionRateService } from './currency-conversion-rate.service';

describe('CurrencyConversionRateService', () => {
  let service: CurrencyConversionRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyConversionRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
