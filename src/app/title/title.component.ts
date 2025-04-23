import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {
  name: String = "Thomas Minchew"
  role: String = "Full-Stack Engineer"
  desc: String = "Delivering Full-Stack applications with excellence."
}
