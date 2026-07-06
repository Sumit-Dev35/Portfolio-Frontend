import { Component } from '@angular/core';
import { HERO_DATA } from './home.data';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
  imports:[RouterLink]
})
export class Home {
  hero = HERO_DATA;
}