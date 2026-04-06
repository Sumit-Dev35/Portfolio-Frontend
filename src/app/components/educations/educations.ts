import { Component, inject, OnInit } from '@angular/core';
import { Education } from '../../services/education';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-educations',
  imports: [DatePipe],
  templateUrl: './educations.html',
  styleUrl: './educations.css',
})
export class Educations implements OnInit {
  educationService = inject(Education);
  educationDetails:any='';
  ngOnInit(): void {
    this.educationService.getAllEducations().subscribe((res)=>{
      if(res && res.success){
        this.educationDetails=res.data;
      }
    })
  }
}
