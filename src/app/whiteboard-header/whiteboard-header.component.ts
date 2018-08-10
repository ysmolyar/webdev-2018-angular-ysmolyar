import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-whiteboard-header',
  templateUrl: './whiteboard-header.component.html',
  styleUrls: ['./whiteboard-header.component.css']
})
export class WhiteboardHeaderComponent implements OnInit {

  isLoggedIn;
  isAdmin;

  constructor(private userService: UserServiceClient, private router: Router) { }


  logout() {
    this.userService
      .logout()
      .then(() =>
        this.router.navigate(['login']));
  }

  ngOnInit() {
    this.userService.isLoggedIn()
      .then(response => {
        this.isLoggedIn = response.status !== 404;
      });
  }

}
