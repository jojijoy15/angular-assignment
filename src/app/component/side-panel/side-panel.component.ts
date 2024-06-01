import { Component } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import { PriceRangeComponent } from './price-range/price-range.component';

@Component({
  selector: 'app-side-panel',
  standalone: true,
  imports: [PriceRangeComponent],
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.css'
})
export class SidePanelComponent {

}
