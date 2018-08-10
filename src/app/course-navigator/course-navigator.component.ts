import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';

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

  constructor(private courseServiceClient: CourseServiceClient) { }

  selectCourse(course) {
    this.selectedCourse = course;
    this.selectedModule = {};
  }

  selectModule(module) {
    this.selectedModule = module;
  }

  ngOnInit() {
    this.courseServiceClient
      .findAllCourses()
      .then(courses => this.courses = courses);
  }

}
