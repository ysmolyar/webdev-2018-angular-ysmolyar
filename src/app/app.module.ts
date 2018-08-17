import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WhiteBoardComponent } from './white-board/white-board.component';
import {CourseServiceClient} from './services/course.service.client';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';

import { routing } from './app.routing';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import {UserServiceClient} from './services/user.service.client';
import { CourseGridComponent } from './course-grid/course-grid.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import {ModuleServiceClient} from './services/module.service.client';
import {LessonServiceClient} from './services/lesson.service.client';
import { WidgetListComponent } from './widget-list/widget-list.component';
import {WidgetServiceClient} from './services/widget.service.client';
import { WhiteboardHeaderComponent } from './whiteboard-header/whiteboard-header.component';
import { SectionListComponent } from './section-list/section-list.component';
import {SectionServiceClient} from './services/section.service.client';
import { AdminComponent } from './admin/admin.component';
import { AdminSectionListComponent } from './admin-section-list/admin-section-list.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizSubmissionsComponent } from './quiz-submissions/quiz-submissions.component';
import { QuizAnswersComponent } from './quiz-answers/quiz-answers.component';
import {QuizServiceClient} from './services/quiz.service.client';
import { TrueFalseQuestionComponent } from './true-false-question/true-false-question.component';
import { FillBlanksQuestionComponent } from './fill-blanks-question/fill-blanks-question.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';
import { EssayQuestionComponent } from './essay-question/essay-question.component';

@NgModule({
  declarations: [
    AppComponent,
    WhiteBoardComponent,
    CourseNavigatorComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CourseGridComponent,
    ModuleListComponent,
    LessonTabsComponent,
    WidgetListComponent,
    WhiteboardHeaderComponent,
    SectionListComponent,
    AdminComponent,
    AdminSectionListComponent,
    QuizListComponent,
    QuizComponent,
    QuizSubmissionsComponent,
    QuizAnswersComponent,
    TrueFalseQuestionComponent,
    FillBlanksQuestionComponent,
    MultipleChoiceQuestionComponent,
    EssayQuestionComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [
    CourseServiceClient,
    UserServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    WidgetServiceClient,
    SectionServiceClient,
    QuizServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
