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
    fetch(`https://wbdv-sp20-cshekar6-server-node.herokuapp.com/api/quizzes/${this.quizId}/attempts`, {
      method: 'POST',
      body: JSON.stringify(this.questions),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
    this.loc.back();
  }
}
