import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseServiceClient} from '../services/CourseServiceClient';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: CourseServiceClient) { }

  courseID = '';
  course = ''
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseID = params.cid;
      this.service.findCourseById(this.courseID).then(course =>
      this.course = course.title);
    });
  }

}
