import { Component } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import { ProductFilterComponent } from './product-filter/product-filter.component';

@Component({
  selector: 'app-side-panel',
  standalone: true,
  imports: [ProductFilterComponent],
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.css'
})
export class SidePanelComponent {

}
