import { Injectable, inject } from '@angular/core';
import { Environment } from '../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Education {
  private http = inject(HttpClient);

  getAllEducations() {
   return this.http.get<any>(`${Environment.url}/education`);
  }

}
