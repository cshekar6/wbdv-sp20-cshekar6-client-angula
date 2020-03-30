import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/CourseServiceClient';

@Component({
  selector: 'app-course-table-component',
  templateUrl: './course-table-component.component.html',
  styleUrls: ['./course-table-component.component.css']
})
export class CourseTableComponentComponent implements OnInit {

  constructor(private service: CourseServiceClient) { }

  courses = [];
  currentDate = new Date().toLocaleString();

  ngOnInit(): void {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
