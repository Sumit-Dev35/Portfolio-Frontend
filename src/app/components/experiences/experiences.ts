import { Component } from '@angular/core';
import { EXPERIENCE_DATA } from './experiences.data';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-experiences',
  standalone: true,
  templateUrl: './experiences.html',
  styleUrl: './experiences.css',
  imports: [SlicePipe],
})
export class Experiences {
  readonly data = EXPERIENCE_DATA;

  expandedItems = new Set<number>();
  showAllTechnologies = false;

  toggleReadMore(index: number): void {
    if (this.expandedItems.has(index)) {
      this.expandedItems.delete(index);
    } else {
      this.expandedItems.clear();
      this.expandedItems.add(index);
    }
  }
}
