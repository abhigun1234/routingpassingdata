import { Component, OnInit } from '@angular/core';
import {CourseService} from '..//course.service'
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private courseService:CourseService) { }

  ngOnInit() {
  }

  getCourse(){
    this.courseService.getCourse().subscribe(res=>{

      console.log("response",res)
    })
  }

}
