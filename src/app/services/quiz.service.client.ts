export class QuizServiceClient {

  HEROKU = 'https://webdev-ysmolyar-nodejs.herokuapp.com';
  LOCALHOST = 'http://localhost:3000';

  findQuizById(quizId) {
    return fetch(this.LOCALHOST + '/api/quiz/' + quizId)
      .then(response => response.json());
  }

  findAllQuizzes() {
    return fetch(this.LOCALHOST + '/api/quiz')
      .then(response => response.json());
  }

  loadSubmissions(quizId) {
    return fetch(this.LOCALHOST + '/api/quiz/' + quizId + '/submissions')
      .then(response => response.json());
  }

  submitQuiz(quiz, quizId) {
    return fetch(this.LOCALHOST + '/api/quiz/' + quizId, {
      method: 'post',
      body: JSON.stringify(quiz),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());
  }
}
