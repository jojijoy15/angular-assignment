import { Component } from '@angular/core';
import { SidePanelComponent } from './side-panel/side-panel.component';

@Component({
  selector: 'app-component',
  standalone: true,
  imports: [SidePanelComponent],
  templateUrl: './component.component.html',
  styleUrl: './component.component.css'
})
export class ComponentComponent {

}
