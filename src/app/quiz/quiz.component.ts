import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuizServiceClient} from '../services/quiz.service.client';
import {Location} from '@angular/common';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private svc: QuizServiceClient,
              private route: ActivatedRoute,
              private loc: Location) { }
  questions = []
  quizId = ''
  ngOnInit(): void {
    this.route.params.subscribe(ps => {
      this.quizId = ps.quizId;
      this.svc.findQuizById(this.quizId)
        .then(qs => this.questions = qs.questions);
    });
  }

  submitQuiz = () => {
    this.loc.back();
  }


}
