import { Component } from '@angular/core';
import { ComponentComponent } from '../component.component';
import { ContainersComponent } from '../../containers/containers.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ComponentComponent, ContainersComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
