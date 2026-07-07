import { Component } from '@angular/core';
import { EXPERIENCE_DATA } from './experiences.data';

@Component({
  selector: 'app-experiences',
  standalone: true,
  templateUrl: './experiences.html',
  styleUrl: './experiences.css'
})
export class Experiences {
  readonly data = EXPERIENCE_DATA;
}