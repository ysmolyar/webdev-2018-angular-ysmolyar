export class WidgetServiceClient {

  findWidgetsForLesson(lessonId) {
    return fetch('https://beastmode-webdev-ysmolyar.herokuapp.com/api/widget')
      .then(response => response.json());
  }
}
