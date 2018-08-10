import { Component, OnInit } from '@angular/core';
import {Course} from '../models/course.model.client';
import {CourseServiceClient} from '../services/course.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  courses: Course[] = [];
  courseTitle = '';
  constructor(private service: CourseServiceClient,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.selectCourse(params['courseId']));
  }

  selectCourse(courseId) {
    this
      .service
      .findCourseById(courseId)
      .then(course => this.courseTitle = course.title);
  }
  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }
}
