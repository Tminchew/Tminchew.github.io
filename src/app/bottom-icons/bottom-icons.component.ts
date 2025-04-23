import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bottom-icons',
  imports: [CommonModule],
  templateUrl: './bottom-icons.component.html',
  styleUrl: './bottom-icons.component.scss'
})
export class BottomIconsComponent {
  iconList = [
    { imgSrc: 'assets/images/icons/instagram.png', alt: 'Instagram', link: 'https://www.instagram.com/' },//TODO
    { imgSrc: 'assets/images/icons/linkedin.png', alt: 'LinkedIn', link: 'https://www.linkedin.com/thomas-minchew' },//TODO
    { imgSrc: 'assets/images/icons/github.png', alt: 'Github', link: 'https://www.github.com/Tminchew' },//TODO
  ]
}