import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser = {};
  sections = [];

  constructor(private userService: UserServiceClient,
              private router: Router) { }

  logout() {
    this.userService
      .logout()
      .then(() =>
        this.router.navigate(['login']));
  }


  update() {

    const user = {
      username: this.currentUser.username,
      password: this.currentUser.password,
      firstName: this.currentUser.firstName,
      lastName: this.currentUser.lastName,
      email: this.currentUser.email,
    };
    this.userService.updateUser(user);
  }

  ngOnInit() {
    this.userService
      .profile()
      .then(user =>
        this.currentUser = user);

  }

}
