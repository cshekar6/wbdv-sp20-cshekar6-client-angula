import { Component, OnInit } from '@angular/core';
import {ModuleServiceClient} from '../services/ModuleServiceClient';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  modules = [];
  moduleId = '' ;
  courseID = '';

  constructor(private service: ModuleServiceClient,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseID = params.cid;
      this.moduleId = params.moduleId;
      this.service.findModulesForCourse(this.courseID).then(module =>
        this.modules = module);
    });
  }

  redirect(param: {courseId, moduleId}) {
   this.router.navigateByUrl(`/table/courses/${param.courseId}/modules/${param.moduleId}`);
  }
}
