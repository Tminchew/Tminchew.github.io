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
      title: "Internet Pinball Database (IPDB)",
      desc: "Worked with Legacy site owner to overhaul the IPDB site. Improved user experience by automating pinball page entries.",
      url: "https://www.ipdb.org/",//TODO: Add URL and Image
      img: "",
      technologies: []
    },
    {
      title: "Project 3",
      desc: "A slightly better test description for a project. Copilot can't generate good descriptions.",
      url: "",//TODO: Add URL and Image
      img: "",
      technologies: ["Angular", "TypeScript", "SCSS"]
    },
    {
      title: "Project 4",
      desc: "A slightly better test description for a project. Copilot can't generate good descriptions.",
      url: "",//TODO: Add URL and Image
      img: "",
      technologies: ["Angular", "TypeScript", "SCSS"]
    },
  ]

}
