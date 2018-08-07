import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  courses = [];
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
