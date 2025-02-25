import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  text: String = "This is a really long div about how I like programming "+
    "and am making attempts to further my knowledge "+
    "and establish a strong foundation for myself by iterating over my LinkedIn "+
    "and making a GitHub Pages Portfolio Site. Relearning angular and typescript "+
    "after switching exclusively to mobile development in jetpack compose and "+
    "kotlin has really made my angular rough around the edges and I think this "+
    "will be a good opportunity for me to really improve in this widely used "+
    "framework. "
}
