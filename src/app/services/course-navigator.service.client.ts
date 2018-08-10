import {Injectable} from '@angular/core';

@Injectable()
export class CourseNavigatorServiceClient {
  findAllCourses() {
    return fetch('http://localhost:8080/api/course')
      .then(response => response.json());
  }
  findAllModulesForGivenCourse(courseId) {
    return fetch('http://localhost:8080/api/course/' + courseId + '/module')
      .then(response => response.json());
  }
}
