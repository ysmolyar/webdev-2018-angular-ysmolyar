export class ModuleServiceClient {
  findModulesForCourse(courseId) {
    return fetch('https://beastmode-webdev-ysmolyar.herokuapp.com/api/course/CID/module'
      .replace('CID', courseId))
      .then(response => response.json());
  }
}
