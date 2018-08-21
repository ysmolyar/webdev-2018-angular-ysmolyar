import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-whiteboard-header',
  templateUrl: './whiteboard-header.component.html',
  styleUrls: ['./whiteboard-header.component.css']
})
export class WhiteboardHeaderComponent implements OnInit {

  isLoggedIn = false;
  isAdminUser = false;
  currentUser = {};

  constructor(private userService: UserServiceClient, private router: Router) { }


  logout() {
    this.userService
      .logout().then(() => {
        this.router.navigate(['login']);
      });
  }

  ngOnInit() {
    this.userService.currentUser()
      .then((user) =>  {
        this.currentUser = user;
        if (user.username !== undefined) {
          this.isLoggedIn = true;
          if ((user.username === 'admin') && (user.password === 'admin')) {
            this.isAdminUser = true;
          } else {
            this.isAdminUser = false;
          }
        } else {
          this.isLoggedIn = false;
          this.isAdminUser = false;
        }
      });
    console.log(this.isLoggedIn);
  }

}
