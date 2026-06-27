import { Component } from '@angular/core';
import { HERO_DATA } from './home.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  hero = HERO_DATA;
}