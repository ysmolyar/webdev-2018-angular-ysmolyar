import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor() { }

  login = (username, password) => {
    const user = {
      username: username,
      password: password
    };
    console.log(user);
  }

  ngOnInit() {
  }

}
