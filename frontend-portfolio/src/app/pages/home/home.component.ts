import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from "../about/about.component";
import { Project, PROJECTS_DATA } from '../../data/projects.data';
import { ProjectModalComponent } from "../projects/project-modal/project-modal.component";
import { ProjectsComponent } from "../projects/projects.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AboutComponent, ProjectModalComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  
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
      console.log('Projects loaded:', this.projects);
    }
  
    openProject(project: Project) {
      console.log('Opening project:', project.title);
      this.selectedProject = project;
    }
  
    closeModal() {
      console.log('Closing modal');
      this.selectedProject = undefined;
    }
}