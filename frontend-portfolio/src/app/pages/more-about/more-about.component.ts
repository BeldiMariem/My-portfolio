import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-more-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './more-about.component.html',
  styleUrls: ['./more-about.component.scss']
})
export class MoreAboutComponent {
  drawings = [
    {
      image: '/images/art/art1.png',
      title: 'Portrait Study',
      year: '2024'
    },
    {
      image: '/images/art/art2.png', 
      title: 'Urban Sketch',
      year: '2023'
    },
    {
      image: '/images/art/art3.png',
      title: 'Nature Drawing',
      year: '2023'
    },
    {
      image: '/images/art/art4.jpg',
      title: 'Abstract Form',
      year: '2024'
    }
  ];
}