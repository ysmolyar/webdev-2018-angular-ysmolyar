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
    this.userService.login(username, password)
      .then(u => this.router.navigate(['profile']));
  }
  ngOnInit() {
  }

}
