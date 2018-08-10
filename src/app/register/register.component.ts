import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username;
  password;
  password2;
  firstName;
  lastName;
  email;
  phoneNum;
  role;

  constructor(private router: Router,
              private userService: UserServiceClient) { }

  register() {

    const user = {
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phoneNum: this.phoneNum,
      role: this.role
    };

    const pass2 = this.password2;

    if (pass2 !== user.password) {
      alert('Passwords do not match!');
    } else {
      this.userService.register(user)
        .then((response) => {
          if (response.status === 400) {
            alert('Sorry, that username is already taken. Please pick a different username.');
            return;
          } else {
            return response.json();
          }
        })
        .then((usr) => {
          if (usr) {
            this.router.navigate(['/profile']);
          }
        });
    }
  }

  ngOnInit() {
  }

}
