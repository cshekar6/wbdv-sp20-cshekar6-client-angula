import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizServiceClient} from '../services/quiz.service.client';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private svc: QuizServiceClient,
              private route: ActivatedRoute,
              private router: Router) { }
  questions = []
  quizId = ''
  courseId = '';

  ngOnInit(): void {
    this.route.params.subscribe(ps => {
      this.quizId = ps.quizId;
      this.courseId = ps.courseId;
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
    }).then(response => response.json()).then(result => this.router.navigate([`/courses/${this.courseId}/result/quizzes/${result._id}`]));
  }
}
