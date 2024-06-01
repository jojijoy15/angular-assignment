import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentComponent } from './component/component.component';
import { ContainersComponent } from './containers/containers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentComponent, ContainersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Joji Assigment';
}
