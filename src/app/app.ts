import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftSidebar } from './components/left-sidebar/left-sidebar';
import { Layout } from "./components/layout/layout";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LeftSidebar, Layout],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('sumit-portfolio-frontend');
}
