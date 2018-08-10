import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from '../models/course.model.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private courseService: CourseServiceClient) { }

  selectedCourse = {};
  courses: Course[] = [];

  ngOnInit() {
     this.courseService.findAllCourses()
       .then(courses => this.courses = courses);
  }

  selectCourse(course) {
    this.selectedCourse = course;
  }

}
