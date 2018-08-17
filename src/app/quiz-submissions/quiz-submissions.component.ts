import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizServiceClient} from '../services/quiz.service.client';

@Component({
  selector: 'app-quiz-submissions',
  templateUrl: './quiz-submissions.component.html',
  styleUrls: ['./quiz-submissions.component.css']
})
export class QuizSubmissionsComponent implements OnInit {

  constructor(private quizService: QuizServiceClient,
              private aRoute: ActivatedRoute,
              private router: Router) {

    this.aRoute.params.subscribe(params => this.loadSubmissions(params['quizId']));
  }

  submissions: {};

  loadSubmissions(qid) {
    this.quizService.getAllSubmissions(qid)
      .then(submissions => this.submissions = submissions);
  }


  ngOnInit() {
  }


}
