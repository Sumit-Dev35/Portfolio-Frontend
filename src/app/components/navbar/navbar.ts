import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAVBAR_CONFIG } from './navbar.data';

declare var bootstrap:any;
@Component({
  selector: 'nav-bar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  navbarConfig = NAVBAR_CONFIG;

  @ViewChild('navbarCollapse')
  navbarCollapse!: ElementRef;

  closeMenu() {
    if (window.innerWidth < 992 && this.navbarCollapse) {
      const collapse = bootstrap.Collapse.getOrCreateInstance(this.navbarCollapse.nativeElement);

      collapse.hide();
      window.scrollTo({top:0,behavior:'smooth'});
    }
  }
}
