import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-lessons-tabs',
  templateUrl: './lessons-tabs.component.html',
  styleUrls: ['./lessons-tabs.component.css']
})
export class LessonsTabsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router) { }
  lessons = []
  moduleId = ''
  courseId = ''
  lessonId = ''
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.cid;
      this.moduleId = params.moduleId;
      this.lessonId = params.lessonId;
      fetch(`https://wbdv-generic-server.herokuapp.com/api/cshekar86/modules/${this.moduleId}/lessons`)
        .then(response => response.json())
        .then(lessons => this.lessons = lessons);
    });
  }

  redirect(param: { lessonId: any; moduleId: string; courseId: string }) {
    this.router.navigateByUrl(`/table/courses/${param.courseId}/modules/${param.moduleId}/lessons/${param.lessonId}`);
  }
}
