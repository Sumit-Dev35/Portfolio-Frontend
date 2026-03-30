import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'left-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './left-sidebar.html',
  styleUrl: './left-sidebar.css',
})
export class LeftSidebar {}
