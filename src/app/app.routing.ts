import { Routes, RouterModule } from '@angular/router';
import {CourseNavigatorComponent} from './course-navigator/course-navigator.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {WhiteBoardComponent} from './white-board/white-board.component';
import {CourseGridComponent} from './course-grid/course-grid.component';
import {SectionListComponent} from './section-list/section-list.component';
import {AdminComponent} from './admin/admin.component';
import {QuizListComponent} from './quiz-list/quiz-list.component';
import {QuizComponent} from './quiz/quiz.component';
import {QuizSubmissionsComponent} from './quiz-submissions/quiz-submissions.component';
import {QuizAnswersComponent} from './quiz-answers/quiz-answers.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: CourseGridComponent },
  { path: 'quizzes', component: QuizListComponent},
  { path: 'quiz/:quizId', component: QuizComponent},
  { path: 'quiz/:quizId/submissions', component: QuizSubmissionsComponent},
  { path: 'quiz/:quizId/submission/:submissionId', component: QuizAnswersComponent},
  { path: 'courses', component: CourseNavigatorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'course/:courseId', component: CourseNavigatorComponent },
  { path: 'course/:courseId/section', component: SectionListComponent },
  { path: 'course/:courseId/module/:moduleId', component: CourseNavigatorComponent },
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseNavigatorComponent },
  { path: 'admin/course', component: AdminComponent},
  { path: 'admin/course/:courseId/section', component: AdminComponent },
  { path: '**', component: WhiteBoardComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
