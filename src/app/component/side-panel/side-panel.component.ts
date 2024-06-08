import { Component } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { CurrencyComponent } from '../currency/currency.component';

@Component({
  selector: 'app-side-panel',
  standalone: true,
  imports: [ProductFilterComponent, CurrencyComponent],
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.css'
})
export class SidePanelComponent {

}
