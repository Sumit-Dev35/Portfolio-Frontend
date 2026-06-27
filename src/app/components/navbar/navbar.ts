import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAVBAR_CONFIG } from './navbar.data';

@Component({
  selector: 'nav-bar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  navbarConfig = NAVBAR_CONFIG;
}
