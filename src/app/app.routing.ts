import { Routes, RouterModule } from '@angular/router';
import {CourseNavigatorComponent} from './course-navigator/course-navigator.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {WhiteBoardComponent} from './white-board/white-board.component';
import {CourseGridComponent} from './course-grid/course-grid.component';
import {SectionListComponent} from './section-list/section-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: CourseGridComponent },
  { path: 'courses', component: CourseNavigatorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'course/:courseId', component: CourseNavigatorComponent },
  { path: 'course/:courseId/section', component: SectionListComponent },
  { path: 'course/:courseId/module/:moduleId', component: CourseNavigatorComponent },
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseNavigatorComponent },
  { path: '**', component: WhiteBoardComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
