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
  username;
  password;
  sections = [];

  constructor(private userService: UserServiceClient,
              // private sectionService: SectionServiceClient,
              private router: Router) { }

  updateUser(user) {
    console.log(user);
  }
  logout() {
    this.userService
      .logout()
      .then(() =>
        this.router.navigate(['login']));
  }
  ngOnInit() {
    this.userService
      .profile()
      .then(user =>
        this.username = user.username);

  }

}
