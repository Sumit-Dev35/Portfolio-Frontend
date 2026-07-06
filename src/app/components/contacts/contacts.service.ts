import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment.mail';

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {

  constructor() {
    emailjs.init(environment.emailJsPublicKey);
  }

  sendEmail(formData: ContactForm) {

    const templateParams = {

      from_name: formData.name,

      from_email: formData.email,

      subject: formData.subject,

      message: formData.message,

      to_name: 'Sumit Tiwari',

    };

    return emailjs.send(
      environment.emailJsServiceId,
      environment.emailJsTemplateId,
      templateParams
    );

  }

}