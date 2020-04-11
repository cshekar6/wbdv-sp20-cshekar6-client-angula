import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseTableComponentComponent} from './course-table-component/course-table-component.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {QuizzesComponentComponent} from './quizzes-component/quizzes-component.component';
import {QuizComponent} from './quiz/quiz.component';


const routes: Routes = [
  {path: '', component: CourseTableComponentComponent},
  {path: 'courses', component: CourseTableComponentComponent},
  {path: ':layout/courses/:cid', component: CourseViewerComponent},
  {path: ':layout/courses/:cid/modules/:moduleId', component: CourseViewerComponent},
  {path: ':layout/courses/:cid/modules/:moduleId/lessons/:lessonId', component: CourseViewerComponent},
  {path: 'courses/:courseId/quizzes', component: QuizzesComponentComponent},
  {path: 'courses/:courseId/result/quizzes/:attemptId', component: QuizzesComponentComponent},
  {path: 'courses/:courseId/quizzes/:quizId', component: QuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
