import { Component } from '@angular/core';
import { LeftSidebar } from '../left-sidebar/left-sidebar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'layout',
  imports: [LeftSidebar,RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
