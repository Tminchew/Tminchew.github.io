import { Component } from '@angular/core';
import { TitleComponent } from "../title/title.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { BottomIconsComponent } from '../bottom-icons/bottom-icons.component';

@Component({
  selector: 'app-screen-layout',
  standalone: true,
  imports: [TitleComponent, AboutMeComponent, BottomIconsComponent],
  templateUrl: './screen-layout.component.html',
  styleUrl: './screen-layout.component.scss'
})
export class ScreenLayoutComponent {

}
