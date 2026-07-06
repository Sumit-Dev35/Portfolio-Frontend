import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { CONTACT_DATA } from './contacts.data';
import { ContactService } from './contacts.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css'
})
export class Contacts {

  readonly data = CONTACT_DATA;

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;

  successMessage = '';

  errorMessage = '';

  constructor(
    private readonly contactService: ContactService
  ) {}

  async sendEmail(form: NgForm): Promise<void> {

    if (form.invalid) {

      form.control.markAllAsTouched();

      return;

    }

    this.isSubmitting = true;

    this.successMessage = '';

    this.errorMessage = '';

    try {

      await this.contactService.sendEmail(this.formData);

      this.successMessage =
        "Thank you for reaching out! Your message has been sent successfully. I'll get back to you within 24 hours.";

      form.resetForm();

      this.resetFormData();

    } catch (error) {

      console.error('EmailJS Error:', error);

      this.errorMessage =
        'Something went wrong while sending your message. Please try again later or contact me directly via email.';

    } finally {

      this.isSubmitting = false;

    }

  }

  private resetFormData(): void {

    this.formData = {

      name: '',

      email: '',

      subject: '',

      message: ''

    };

  }

}