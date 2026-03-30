import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contacts',
  imports: [CommonModule,FormsModule],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css',
})
export class Contacts {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  constructor() {
    // Replace with your EmailJS credentials
    emailjs.init('YOUR_PUBLIC_KEY'); // ← Get from emailjs.com
  }

  async sendEmail(form: any) {
    if (form.invalid) return;

    this.isSubmitting = true;
    this.successMessage = '';
    this.errorMessage = '';

    const templateParams = {
      from_name: this.formData.name,
      from_email: this.formData.email,
      subject: this.formData.subject,
      message: this.formData.message,
      to_name: 'Sumit Tiwari',
    };

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // ← from EmailJS dashboard
        'YOUR_TEMPLATE_ID', // ← create a template in EmailJS
        templateParams,
      );

      this.successMessage = 'Thank you! Your message has been sent successfully.';
      form.resetForm();
      this.formData = { name: '', email: '', subject: '', message: '' };
    } catch (error) {
      console.error('EmailJS error:', error);
      this.errorMessage = 'Oops! Something went wrong. Please try again or email me directly.';
    } finally {
      this.isSubmitting = false;
    }
  }
}
