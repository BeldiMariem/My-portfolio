import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCategory, SKILLS_DATA } from '../../data/skills.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills: SkillCategory[] = SKILLS_DATA;
}