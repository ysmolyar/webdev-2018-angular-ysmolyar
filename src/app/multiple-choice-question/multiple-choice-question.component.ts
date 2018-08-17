import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  @Input() question;
  selectedChoice;


  constructor() { }

  ngOnInit() {
  }
  selected(value) {
    this.selectedChoice = value;
    this.question.multipleChoiceAnswer = value;
  }
}
