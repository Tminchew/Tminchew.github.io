import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  p1: String = "I'm a software engineer with a passion for crafting sleek, minimalist websites that blend clean design with seamless functionality. "+
  "I enjoy turning complex ideas into simple, elegant user experiences. Whether it's front-end magic or back-end logic, I focus on building web solutions that are both clean and efficient.\n"

  p2: String = "Currently, I'm an Associate Full-Stack Engineer at American Airlines, with a focus on front-end design using Angular. "+
   "I help build intuitive web and mobile applications that provide ground crew members with quick access to flight data and operational insights.\n"

   p3: String = "I began my career with a data engineering internship at American Airlines, where I gained hands-on experience with Azure cloud technologies like Databricks, Azure Kubernetes Service, and Azure Data Factory. "+
   "This early exposure gave me a strong foundation in SQL and a deep familiarity with the various data types used across airline domains. "+
   "It’s been instrumental in shaping me into a well-rounded full-stack engineer with a solid understanding of both data and application layers.\n"

   p4: String = "When I'm not sitting down coding, I'm learning how to play the guitar and I love to stay active by working out and playing hockey. Go Stars!"

   list: [String, String, String, String] = [this.p1,this.p2,this.p3,this.p4]
}
