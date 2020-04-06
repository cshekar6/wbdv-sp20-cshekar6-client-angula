import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  constructor() { }
  @Input()
  question = {_id: '', title: '', question: '', correct: '', answer: '' };
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
