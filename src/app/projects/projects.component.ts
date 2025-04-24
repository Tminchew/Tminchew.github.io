import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: any[] = [
    {
      title: "Portfolio Website",
      desc: "This website right here! Made using Angular, TypeScript, and SCSS. It is hosted on GitHub Pages.",
      url: "https://Tminchew.github.io/thomasminchew.com",
      img: "",//TODO: Add Image
      technologies: ["Angular", "TypeScript", "SCSS"]
    },
    {
      title: "Project 1",
      desc: "This is a funny test description for a project. It is a test description for a project. It is a test description for a project. It is a test description for a project.",
      url: "",//TODO: Add URL and Image
      img: "",
      technologies: ["Angular", "TypeScript", "SCSS"]
    },
    {
      title: "Project 2",
      desc: "A slightly better test description for a project. Copilot can't generate good descriptions.",
      url: "",//TODO: Add URL and Image
      img: "",
      technologies: ["Angular", "TypeScript", "SCSS"]
    },
    {
      title: "Project 2",
      desc: "A slightly better test description for a project. Copilot can't generate good descriptions.",
      url: "",//TODO: Add URL and Image
      img: "",
      technologies: ["Angular", "TypeScript", "SCSS"]
    },
  ]

}
