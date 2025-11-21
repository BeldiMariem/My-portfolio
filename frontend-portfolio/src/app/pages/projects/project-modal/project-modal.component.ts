import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project, PROJECTS_DATA } from '../../../data/projects.data';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent {
  @Input() project?: Project;
  @Output() close = new EventEmitter<void>();

  hasChallengesAndSolutions(): boolean {
    return !!(this.project?.challenges && this.project?.solutions);
  }

  hasDemoCredentials(): boolean {
    return !!this.project?.demoCredentials;
  }

  hasFeatures(): boolean {
    return !!(this.project?.features && this.project.features.length > 0);
  }

  hasTechnologies(): boolean {
    return !!(this.project?.technologies && this.project.technologies.length > 0);
  }

  closeModal() {
    this.close.emit();
  }

}