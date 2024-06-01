import { Component, Input } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { CurrencyComponent } from '../component/currency/currency.component';

@Component({
  selector: 'app-containers',
  standalone: true,
  imports: [ProductListComponent, CurrencyComponent],
  templateUrl: './containers.component.html',
  styleUrl: './containers.component.css'
})
export class ContainersComponent {

}
