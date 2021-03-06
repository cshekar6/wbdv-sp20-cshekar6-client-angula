import {Injectable} from '@angular/core';
@Injectable()
export class QuizServiceClient {
  findAllQuizzes = () =>
    fetch('https://wbdv-sp20-cshekar6-server-node.herokuapp.com/api/quizzes')
      .then(response => response.json())
  findQuizById = (qid) =>
    fetch(`https://wbdv-sp20-cshekar6-server-node.herokuapp.com/api/quizzes/${qid}`)
      .then(response => response.json())
  findAllAttempt = () =>
    fetch(`https://wbdv-sp20-cshekar6-server-node.herokuapp.com/api/quizzes/attempts/all`)
      .then(response => response.json())
}
