import {Injectable} from '@angular/core';

@Injectable()
export class UserServiceClient {

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch('http://localhost:3000/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  logout() {
    return fetch('https://webdev-ysmolyar-nodejs.herokuapp.com/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  profile() {
    return fetch('https://webdev-ysmolyar-nodejs.herokuapp.com/api/profile',
      {
        credentials: 'include',
      });
  }


  updateUser(user) {
    return fetch('https://webdev-ysmolyar-nodejs.herokuapp.com/api/profile', {
      body: JSON.stringify(user),
      credentials: 'include',
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }


  isLoggedIn() {
    return fetch('https://webdev-ysmolyar-nodejs.herokuapp.com/api/login/loggedin', {
      credentials: 'include'
    });
  }

  register(user) {

    return fetch('https://webdev-ysmolyar-nodejs.herokuapp.com/api/register',
      {
        body: JSON.stringify(user),
        credentials: 'include',
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        }
      });
  }



}
