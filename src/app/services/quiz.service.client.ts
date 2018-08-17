export class QuizServiceClient {

  HEROKU = 'https://webdev-ysmolyar-nodejs.herokuapp.com';
  LOCALHOST = 'http://localhost:3000';

  findQuizById(quizId) {
    return fetch(this.HEROKU + '/api/quiz/' + quizId)
      .then(response => response.json());
  }

  findAllQuizzes() {
    return fetch(this.HEROKU + '/api/quiz')
      .then(response => response.json());
  }

  loadSubmissions(quizId) {
    return fetch(this.HEROKU + '/api/quiz/' + quizId + '/submission')
      .then(response => response.json());
  }

  submitQuiz(quiz) {
    return fetch(this.HEROKU + '/api/quiz/' + quiz._id + '/submission', {
      method: 'post',
      body: JSON.stringify(quiz),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());
  }

  getAllSubmissions(qid) {
    return fetch(this.HEROKU + '/api/quiz/' + qid + '/submission', {
      credentials: 'include'
    }).then(response => response.json());
  }

  getSubmissionById(qid, submissionId) {
    return fetch(this.HEROKU + '/api/quiz/' + qid + '/submission/' + submissionId, {
      credentials: 'include'
    }).then(response => response.json());
  }
}
