import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [MatIconModule, MatTooltipModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {

  @Input() rating!: number;

}
