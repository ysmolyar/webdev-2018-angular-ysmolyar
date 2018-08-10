import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findAllCourses() {
    return fetch('https://beastmode-webdev-ysmolyar.herokuapp.com/api/course')
      .then(response => response.json());
  }

  findCourseById(courseId) {
    return fetch('https://beastmode-webdev-ysmolyar.herokuapp.com/api/course/' + courseId)
      .then(response => response.json());
  }

  findAllModulesForCourse(courseId) {
    return fetch('https://beastmode-webdev-ysmolyar.herokuapp.com/api/course/' + courseId + '/module')
      .then(response => response.json());
  }
}
