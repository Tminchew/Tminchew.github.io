import { Component } from '@angular/core';
import { TitleComponent } from "../title/title.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { BottomIconsComponent } from '../bottom-icons/bottom-icons.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-screen-layout',
  standalone: true,
  imports: [TitleComponent, AboutMeComponent, BottomIconsComponent, NavigationComponent, ExperienceComponent],
  templateUrl: './screen-layout.component.html',
  styleUrl: './screen-layout.component.scss'
})
export class ScreenLayoutComponent {

}
