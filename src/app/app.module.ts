import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseTableComponentComponent } from './course-table-component/course-table-component.component';
import {CourseServiceClient} from './services/CourseServiceClient';
import {ModuleServiceClient} from './services/ModuleServiceClient';
import {LessonServiceClient} from './services/LessonServiceClient';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LessonsTabsComponent } from './lessons-tabs/lessons-tabs.component';
import { QuizzesComponentComponent } from './quizzes-component/quizzes-component.component';
import {QuizServiceClient} from './services/quiz.service.client';
import {QuestionServiceClient} from './services/question.service.client';
import { QuizComponent } from './quiz/quiz.component';
import { TrueFalseQuestionComponent } from './true-false-question/true-false-question.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CourseTableComponentComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonsTabsComponent,
    QuizzesComponentComponent,
    QuizComponent,
    TrueFalseQuestionComponent,
    MultipleChoiceQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    QuizServiceClient,
    QuestionServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
