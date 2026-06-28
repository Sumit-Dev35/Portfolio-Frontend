import { Component } from '@angular/core';
import { SKILLS_DATA } from './skills.data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  readonly skillsData = SKILLS_DATA;
}