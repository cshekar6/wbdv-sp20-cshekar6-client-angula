import {Injectable} from '@angular/core';

@Injectable()
export class LessonServiceClient {
  findLessonsForModule = (moduleID) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/cshekar86/modules/${moduleID}/lessons`)
      .then(response => response.json())
}
