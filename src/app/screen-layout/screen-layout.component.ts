import { Component } from '@angular/core';
import { TitleComponent } from "../title/title.component";
import { AboutMeComponent } from "../about-me/about-me.component";

@Component({
  selector: 'app-screen-layout',
  standalone: true,
  imports: [TitleComponent, AboutMeComponent],
  templateUrl: './screen-layout.component.html',
  styleUrl: './screen-layout.component.scss'
})
export class ScreenLayoutComponent {

}
