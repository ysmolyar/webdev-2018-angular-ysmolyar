export class QuizServiceClient {

  findQuizById(quizId) {
    return fetch('https://webdev-ysmolyar-nodejs.herokuapp.com/api/quiz/' + quizId)
      .then(response => response.json());
  }

  findAllQuizzes() {
    return fetch('https://webdev-ysmolyar-nodejs.herokuapp.com/api/quiz')
      .then(response => response.json());
  }

  loadSubmissions(quizId) {
    return fetch('https://webdev-ysmolyar-nodejs.herokuapp.com/api/quiz/' + quizId + '/submissions')
      .then(response => response.json());
  }

  submitQuiz(quiz, quizId) {
    return fetch('https://webdev-ysmolyar-nodejs.herokuapp.com/api/quiz/' + quizId,{
      method: 'post',
      body: JSON.stringify(quiz),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());
  }
}
