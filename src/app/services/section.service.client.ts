export class SectionServiceClient {

  HEROKU = 'https://webdev-ysmolyar-nodejs.herokuapp.com';
  LOCALHOST = 'http://localhost:3000';
  SECTION_URL = this.HEROKU + '/api/course/CID/section';

  findSectionsForStudent() {
    const url = this.HEROKU + '/api/student/section';
    return fetch(url, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  enrollStudentInSection(sectionId) {
    const url = this.HEROKU + '/api/student/' + sectionId + '/section';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }

  findSectionsForCourse(courseId) {
    return fetch(this.SECTION_URL.replace('CID', courseId))
      .then(response => response.json());
  }

  createSection(courseId, name, seats) {
    const section = {courseId, name, seats};
    return fetch(this.SECTION_URL.replace('CID', courseId), {
      method: 'post',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  deleteSection(sectionId, courseId) {
    return fetch(this.HEROKU + '/api/section/' + sectionId, {
      method: 'delete',
      credentials: 'include'
    }).then(() => this.findSectionsForCourse(courseId));
  }

  unEnrollStudent(sectionId) {
    const url = this.HEROKU + '/api/student/' + sectionId + '/section';
    return fetch(url, {
      method: 'delete',
      credentials: 'include'
    }).then(() =>
      this.findSectionsForStudent());
  }

  updateSection(sectionId, sectionName) {
    const section = {
      name: sectionName
    };

    return fetch(this.HEROKU + '/api/section/' + sectionId, {
      body: JSON.stringify(section),
      credentials: 'include',
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }
}
