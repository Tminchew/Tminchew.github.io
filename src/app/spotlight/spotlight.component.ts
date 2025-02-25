import { HostListener, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

    @Component({
      selector: 'app-spotlight',
      standalone: true,
      imports: [CommonModule],
      templateUrl: './spotlight.component.html',
      styleUrls: ['./spotlight.component.css']
    })
    export class SpotlightComponent {
      spotlightX = 0;
      spotlightY = 0;

      @HostListener('document:mousemove', ['$event'])
      onMouseMove(event: MouseEvent) {
        this.spotlightX = event.clientX;
        this.spotlightY = event.clientY;
      }
    }