import { Component, OnInit } from '@angular/core';
import {CourseNavigatorServiceClient} from '../services/course-navigator.service.client';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  courses = [];
  modules = [];
  selectedCourse = {};
  selectedModule = {};

  constructor(private service: CourseNavigatorServiceClient) { }

  selectCourse(course) {
    this.selectedCourse = course;
    this.service
      .findAllModulesForGivenCourse(course.id)
      .then(modules => this.modules = modules);
    this.selectedModule = {};
  }

  selectModule(module) {
    this.selectedModule = module;
  }

  ngOnInit() {
    this.service
      .findAllCourses()
      .then(courses => this.courses = courses);
  }

}
