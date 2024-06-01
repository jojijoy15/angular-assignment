import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { Inventory } from './model/inventory.type';

@Injectable()
export class InventoryService {

  constructor(private httpClient: HttpClient) {}

  fetchProducts() {
    const dummyProductsUrl = 'https://dummyjson.com/products';
    return this.httpClient.get<Inventory>(dummyProductsUrl, { responseType: 'json' })
  }
}
