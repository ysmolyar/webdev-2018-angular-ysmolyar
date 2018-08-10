import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LessonServiceClient} from '../services/lesson.service.client';
import {ModuleServiceClient} from '../services/module.service.client';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  courseId;
  moduleId;
  lessonId;
  moduleTitle;
  lessons = [];

  constructor(private lessonService: LessonServiceClient,
              private moduleService: ModuleServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setParams(params));
  }


  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.lessonId = params['lessonId'];
    this.loadLessons(this.courseId, this.moduleId);
  }

  loadLessons(courseId, moduleId) {
    this.moduleId = moduleId;
    console.log(moduleId);
    if (moduleId !== undefined) {
      this.lessonService.findLessonsForModule(courseId, moduleId)
        .then(lessons => this.lessons = lessons);

      this.moduleService.findModuleById(courseId, moduleId)
        .then(response => this.moduleTitle = response.title);
    }
  }

  ngOnInit() {
  }

}
