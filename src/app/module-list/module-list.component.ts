import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModuleServiceClient} from '../services/module.service.client';
import {Course} from '../models/course.model.client';
import {CourseServiceClient} from '../services/course.service.client';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  constructor(private service: ModuleServiceClient,
              private courseServiceClient: CourseServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setParams(params));
  }

  courseId;
  moduleId;
  modules = [];
  moduleTitle;


  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.service.findModuleById(params['courseId'], params['moduleId'])
      .then(module => this.moduleTitle = module.title);

    this.renderModules(this.courseId);
  }

  renderModules(courseId) {
    this.courseId = courseId;
    this.service.findModulesForCourse(courseId)
      .then(modules => this.modules = modules);
  }

  ngOnInit() {
  }

}
