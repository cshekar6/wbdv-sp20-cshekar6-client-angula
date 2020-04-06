import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuizServiceClient} from '../services/quiz.service.client';

@Component({
  selector: 'app-quizzes-component',
  templateUrl: './quizzes-component.component.html',
  styleUrls: ['./quizzes-component.component.css']
})
export class QuizzesComponentComponent implements OnInit {

  constructor(private service: QuizServiceClient,
              private route: ActivatedRoute) { }

  courseId = ''
  quizzes = []
  attempts = []

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.service.findAllQuizzes()
        .then(quizzes => this.quizzes = quizzes);
      this.service.findAllAttempt()
        .then(attempts => this.attempts = attempts);
    });
  }

}
