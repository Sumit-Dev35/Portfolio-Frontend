import { Component } from '@angular/core';
import { ABOUT_DATA } from './about.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  about = ABOUT_DATA;
}