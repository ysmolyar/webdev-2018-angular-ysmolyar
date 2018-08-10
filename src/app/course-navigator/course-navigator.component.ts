import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../models/course.model.client';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  course: Course = new Course();

  constructor(private courseServiceClient: CourseServiceClient, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.renderCourse(params['courseId']));
  }
  renderCourse(courseId) {
    this.courseServiceClient.findCourseById(courseId)
      .then(course => this.course = course);
  }

  ngOnInit() {
  }

}
