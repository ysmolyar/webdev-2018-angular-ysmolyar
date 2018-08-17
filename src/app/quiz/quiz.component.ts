import { Component, OnInit } from '@angular/core';
import {QuizServiceClient} from '../services/quiz.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {


  constructor(private service: QuizServiceClient,
              private router: Router,
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

  submit(quiz) {
    this.service
      .submitQuiz(this.quiz);
    this.router.navigate(['quizzes']);

  }

  ngOnInit() {
    this.service.findQuizById(this.quizId)
      .then(quiz => this.quiz = quiz);
  }

}
