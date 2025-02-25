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
  desc: String = "I build full-stack apps with experience developing for fortune 500 companies."
}
