import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  constructor() { }
  @Input()
  question = {_id: '', title: '', question: '', choices: [], correct: '', answer: '' }
  grading = false;
  correct = false;

  @Output()
  answerChange = new EventEmitter<string>()
  submitAnswer = () =>
    this.answerChange.emit(this.question.answer)

  grade = () => {
    this.grading = true;
    if (this.question.answer === this.question.correct) {
      this.correct = true;
    }
  }

  ngOnInit(): void {
  }

}
