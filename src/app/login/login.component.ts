import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;

  constructor(private router: Router,
              private userService: UserServiceClient) { }

  login(username, password) {
    this.username = username;
    this.password = password;

    if (username === undefined) {
      window.alert('Enter your username');
    } else if (password === undefined) {
      window.alert('Enter a password!');
    } else if (username === 'admin' && password === 'admin') {
      this.userService.login(username, password)
        .then(() => this.router.navigate(['admin/course']),
          () => window.alert('Invalid login!'));
    } else {
        this.userService.login(username, password)
          .then(() => this.router.navigate(['profile']),
            () => window.alert('Invalid login!'));
      }
    }

  ngOnInit() { }

}
