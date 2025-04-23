import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [ CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  jobs: any[] = [
    {
      company: "American Airlines",
      url: "https://www.aa.com",
      title: "IT Applications ADEPT", 
      date: "2024 - Present",
      desc: "Developing web and mobile applications using Angular, Spring, Kotlin, and Jetpack Compose",
      technologies: [] = ["TypeScript", "Java Spring", "Kotlin", "Jetpack Compose"]
    },
    {
      company: "American Airlines",
      url: "https://www.aa.com",
      title: "SDE Intern",
      date: "May - Dec 2023",
      desc: "Cloud Data Engineering Intern. Developed data pipelines using Python and Azure Services like Databricks, Data lake storage, and Data Factory.",
      technologies: [] = ["Python", "ADB", "ADF", "Blob Storage", "ADLS"]
    },
    {
      company: "American Airlines",
      url: "https://www.aa.com",
      title: "SDE Intern",
      date: "May - Dec 2023",
      desc: "Cloud Data Engineering Intern. Developed data pipelines using Python and Azure Services like Databricks, Data lake storage, and Data Factory.",
      technologies: [] = ["Python", "ADB", "ADF", "Blob Storage", "ADLS"]
    },
    {
      company: "American Airlines",
      url: "https://www.aa.com",
      title: "SDE Intern",
      date: "May - Dec 2023",
      desc: "Cloud Data Engineering Intern. Developed data pipelines using Python and Azure Services like Databricks, Data lake storage, and Data Factory.",
      technologies: [] = ["Python", "ADB", "ADF", "Blob Storage", "ADLS"]
    },
    {
      company: "American Airlines",
      url: "https://www.aa.com",
      title: "SDE Intern",
      date: "May - Dec 2023",
      desc: "Cloud Data Engineering Intern. Developed data pipelines using Python and Azure Services like Databricks, Data lake storage, and Data Factory.",
      technologies: [] = ["Python", "ADB", "ADF", "Blob Storage", "ADLS"]
    },
    {
      company: "American Airlines",
      url: "https://www.aa.com",
      title: "SDE Intern",
      date: "May - Dec 2023",
      desc: "Cloud Data Engineering Intern. Developed data pipelines using Python and Azure Services like Databricks, Data lake storage, and Data Factory.",
      technologies: [] = ["Python", "ADB", "ADF", "Blob Storage", "ADLS"]
    },
    {
      company: "American Airlines",
      url: "https://www.aa.com",
      title: "SDE Intern",
      date: "May - Dec 2023",
      desc: "Cloud Data Engineering Intern. Developed data pipelines using Python and Azure Services like Databricks, Data lake storage, and Data Factory.",
      technologies: [] = ["Python", "ADB", "ADF", "Blob Storage", "ADLS"]
    },
    {
      company: "American Airlines",
      url: "https://www.aa.com",
      title: "SDE Intern",
      date: "May - Dec 2023",
      desc: "Cloud Data Engineering Intern. Developed data pipelines using Python and Azure Services like Databricks, Data lake storage, and Data Factory.",
      technologies: [] = ["Python", "ADB", "ADF", "Blob Storage", "ADLS"]
    },
    {
      company: "American Airlines",
      url: "https://www.aa.com",
      title: "SDE Intern",
      date: "May - Dec 2023",
      desc: "Cloud Data Engineering Intern. Developed data pipelines using Python and Azure Services like Databricks, Data lake storage, and Data Factory.",
      technologies: [] = ["Python", "ADB", "ADF", "Blob Storage", "ADLS"]
    },
  ];

}
