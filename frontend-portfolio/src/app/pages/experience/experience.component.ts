import { Component } from '@angular/core';
import { Experience, EXPERIENCES_DATA } from '../../data/experiences.data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule], 
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences: Experience[] = EXPERIENCES_DATA;
  selected: Experience | null = null;

  open(exp: Experience) {
    this.selected = exp;
  }

  close() {
    this.selected = null;
  }
}
