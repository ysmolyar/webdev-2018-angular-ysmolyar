export class LessonServiceClient {
  findLessonsForModule(courseId, moduleId) {
    return fetch('https://beastmode-webdev-ysmolyar.herokuapp.com/api/course/' + courseId + '/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }
}
