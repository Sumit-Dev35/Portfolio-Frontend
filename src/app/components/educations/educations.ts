import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { EducationModel } from './education.model';
import { EducationData } from './education.data';
@Component({
  selector: 'app-educations',
  imports: [DatePipe],
  templateUrl: './educations.html',
  styleUrl: './educations.css',
})
export class Educations {
  educationDetails:EducationModel[]=(new EducationData()).educationDetails
}
