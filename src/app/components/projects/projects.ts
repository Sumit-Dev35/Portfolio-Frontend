import { Component } from '@angular/core';
import { PROJECTS_DATA, UPCOMING_PROJECTS } from './projects.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  readonly projects = PROJECTS_DATA;
  readonly upcomingProjects = UPCOMING_PROJECTS;
}