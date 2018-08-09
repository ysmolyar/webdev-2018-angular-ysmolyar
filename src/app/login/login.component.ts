import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(private userService: UserServiceClient) { }

  login = (username, password) => {
    const user = {
      username: username,
      password: password
    };
    this.userService.login(user);
  }

  ngOnInit() {
  }

}
