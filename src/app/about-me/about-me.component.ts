import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  playAudio() {
    this.audioPlayer.nativeElement.play();
  }

  stopAudio() {
    this.audioPlayer.nativeElement.pause();
    this.audioPlayer.nativeElement.currentTime = 0; // Reset to the beginning
  }
  p1: String = "I'm a software engineer with a passion for crafting sleek, minimalist websites that blend clean design with seamless functionality. "+
  "I enjoy turning complex ideas into simple, elegant user experiences. Whether it's front-end magic or back-end logic, I focus on building web solutions that are both clean and efficient.\n"

  p2: String = "I graduated from the "
  p2Link: String = "University of Texas at Dallas";
  p2_2: String = " with a bachelors in Computer Science. While studying there, I began my career with a data engineering internship at American Airlines, where I gained hands-on experience with technologies like "
  p2Link_2:String = "Databricks"
  p2Link_3: String = "Azure Kubernetes Service" 
  p2Link_4: String = "Azure Data Factory"
  p2_3:String = "This early exposure gave me a strong foundation in SQL and a deep familiarity with the various data types used across airline domains. "+
   "It’s been instrumental in shaping me into a well-rounded full-stack engineer with a solid understanding of both data and application layers.\n"
   
  p3: String = "After completing my internship, I returned full time as a part of the "
  p3Link: String = "ADEPT"; 
  p3_2: String = " cohort. ADEPT is an accelerated leadership rotational program where members rotate through various teams and projects, "+
   "gaining exposure to different technologies and domains. This program has allowed me to work on a variety of projects, including web applications, mobile applications, and data engineering tasks.\n";
  
  p4: String = "Currently, I'm an Associate Full-Stack Engineer at American Airlines, with a focus on front-end design using Angular. "+
   "I help build intuitive web and mobile applications that provide ground crew members with quick access to flight data and operational insights.\n"

  p5: String = "When I'm not sitting down coding, I'm learning how to play the guitar and I love to stay active by working out and playing hockey. Go "
  p5Link: String = "Stars!"
}
