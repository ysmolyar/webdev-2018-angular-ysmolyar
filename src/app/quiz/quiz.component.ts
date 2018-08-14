import { Component, OnInit } from '@angular/core';
import {QuizServiceClient} from '../services/quiz.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {


  constructor(private service: QuizServiceClient,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute
      .params
      .subscribe(params => this.loadQuiz(params['quizId']));
  }

  quizId = '';
  quiz = {};
  submission = {};
  loadQuiz(quizId) {
    this.quizId = quizId;
    this.service
      .findQuizById(quizId)
      .then(quiz => this.quiz = quiz);
  }
  submit(submission) {
    console.log(this.submission);
    this.service
      .submitQuiz(this.submission, this.quizId);
  }

  ngOnInit() {
  }

}
