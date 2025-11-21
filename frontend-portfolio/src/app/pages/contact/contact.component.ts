import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Add this import
import { ContactInfo, CONTACT_DATA } from '../../data/contact.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add FormsModule here
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactInfo: ContactInfo[] = CONTACT_DATA;
  
  // Form data
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  // Add this method for navigation
  navigateTo(url: string) {
    window.open(url, '_blank');
  }

  onSubmit() {
    // Handle form submission here
    console.log('Form submitted:', this.formData);
    // You can integrate with a service to send emails
    alert('Thank you for your message! I\'ll get back to you soon.');
    
    // Reset form
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}