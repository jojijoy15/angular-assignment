import { Component, DestroyRef, Input, OnChanges, OnInit, inject } from '@angular/core';
import { ProductComponent } from '../../component/product/product.component';
import { ProductType } from '../../component/product/product.type';
import { InventoryService } from '../../services/inventory.service';
import { CurrencyStoreService } from '../../services/currency-store.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CurrencyRate } from '../../component/currency/models/currency.type';
import { SidePanelService } from '../../services/side-panel.service';
import { ProductsFilterPipe } from './pipes/filter.pipe';
import { SidePanelDetails } from '../../services/model/side-panel-details.type';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent, ProductsFilterPipe],
  providers: [InventoryService],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  
  inventory!: ProductType[];
  currencyInfo!:CurrencyRate;

  productService = inject(InventoryService)
  currencyStore = inject(CurrencyStoreService);
  sidePanelService = inject(SidePanelService);
  sidePanelDetail: SidePanelDetails = this.sidePanelService.intialSidePanelDetails;

  destroy$ = inject(DestroyRef);

  ngOnInit(): void {
    this.fetchInventory();
    this.currencyStore.currencyObservable
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe(rate => this.currencyInfo = rate as CurrencyRate);
    this.sidePanelService.sidePanelObservable
      .subscribe(data => this.sidePanelDetail = data);

  }

  fetchInventory() {
    this.productService
    .fetchProducts()
    .subscribe({
      next: products => this.inventory = products.products,
      error: error => console.log(error),
    })
  }

}

