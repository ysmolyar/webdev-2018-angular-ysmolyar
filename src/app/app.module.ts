import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WhiteBoardComponent } from './white-board/white-board.component';
import {CourseServiceClient} from './services/course.service.client';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { routing } from './app.routing';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    WhiteBoardComponent,
    CourseNavigatorComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    CourseServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
