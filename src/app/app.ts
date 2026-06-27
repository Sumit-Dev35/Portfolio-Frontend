import { Component, signal } from '@angular/core';
import { Layout } from './components/layout/layout';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [Layout, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Sumit Tiwari | Full Stack Developer');
}
