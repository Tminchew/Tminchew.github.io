import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from "./title/title.component";
import { ScreenLayoutComponent } from "./screen-layout/screen-layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScreenLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tminchew.github.io';
}
