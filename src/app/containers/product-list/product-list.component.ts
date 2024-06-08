import { Component, DestroyRef, Input, OnChanges, OnInit, inject } from '@angular/core';
import { ProductComponent } from '../../component/product/product.component';
import { ProductType } from '../../component/product/product.type';
import { InventoryService } from '../../services/inventory.service';
import { CurrencyStoreService } from '../../services/currency-store.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CurrencyRateInfo } from '../../component/currency/models/currency.type';
import { SidePanelService } from '../../services/side-panel.service';
import { ProductsFilterPipe } from './pipes/filter.pipe';
import { SidePanelDetails } from '../../services/model/side-panel-details.type';
import { SortPipe } from './pipes/sort.pipe';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent, ProductsFilterPipe, SortPipe, MatProgressSpinnerModule],
  providers: [InventoryService],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  
  inventory!: ProductType[];
  currencyInfo!:CurrencyRateInfo;

  productService = inject(InventoryService)
  currencyStore = inject(CurrencyStoreService);
  sidePanelService = inject(SidePanelService);
  spinnerService = inject(SpinnerService);
  sidePanelDetail: SidePanelDetails = this.sidePanelService.intialSidePanelDetails;
  loading: boolean = false;

  destroy$ = inject(DestroyRef);

  ngOnInit(): void {
    this.fetchInventory();
    this.currencyStore.currencyObservable
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe(rate => this.currencyInfo = rate as CurrencyRateInfo);
    this.sidePanelService.sidePanelObservable
      .subscribe(data => this.sidePanelDetail = data);
    this.spinnerService.loading$
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe(loadingStatus => this.loading = loadingStatus);
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

