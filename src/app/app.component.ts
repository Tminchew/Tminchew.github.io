import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScreenLayoutComponent } from "./screen-layout/screen-layout.component";
import { SpotlightComponent } from './spotlight/spotlight.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScreenLayoutComponent, SpotlightComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tminchew.github.io';
}
