import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from "../about/about.component";
import { Project, PROJECTS_DATA } from '../../data/projects.data';
import { ProjectModalComponent } from "../projects/project-modal/project-modal.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ExperienceComponent } from '../experience/experience.component';
import { Education, EDUCATION_DATA } from '../../data/education.data';
import { SkillsComponent } from "../skills/skills.component";
import { ContactComponent } from "../contact/contact.component";
import { MoreAboutComponent } from "../more-about/more-about.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,MoreAboutComponent, ContactComponent, SkillsComponent, AboutComponent, ProjectModalComponent, ProjectsComponent, ExperienceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
    education: Education[] = EDUCATION_DATA;
  
  ngAfterViewInit() {
    this.setupScrollAnimations();
  }

  setupScrollAnimations() {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      observer.observe(section);
    });
  }
    
    projects: Project[] = [];
    selectedProject?: Project;
  
    ngOnInit() {
      this.projects = PROJECTS_DATA;
    }
  
    openProject(project: Project) {
      this.selectedProject = project;
    }
  
    closeModal() {
      this.selectedProject = undefined;
    }
}