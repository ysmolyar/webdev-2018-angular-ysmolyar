import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username;
  firstName;
  lastName;
  email;
  phoneNum;
  role;
  isAdmin;
  sections = [];

  constructor(private userService: UserServiceClient,
              private sectionService: SectionServiceClient,
              private router: Router) { }

  logout() {
    this.userService
      .logout()
      .then(() =>
        this.router.navigate(['login']));
  }


  update() {

    const user = {
      username: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phoneNum: this.phoneNum,
      role: this.role
    };
    this.userService.updateUser(user);
  }

  ngOnInit() {
    this.userService
      .profile()
      .then(user => {
        this.username = user.username;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.phoneNum = user.phoneNum;
        this.role = user.role;
        this.isAdmin = user.role === 'ADMIN';
      });


    this.sectionService
      .findSectionsForStudent()
      .then(sections => this.sections = sections );

  }


  unenroll(section) {
    this.sectionService.unEnrollStudent(section._id)
      .then(sections => {
        this.sections = sections;
      });
  }

}
