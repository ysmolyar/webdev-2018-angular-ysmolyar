import {Injectable} from '@angular/core';

@Injectable()
export class UserServiceClient {

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch('https://webdev-2018-ysmolyar-angularjs.herokuapp.com/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  logout() {
    return fetch('https://webdev-2018-ysmolyar-angularjs.herokuapp.com/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  // https://webdev-ysmolyar-nodejs.herokuapp.com/api/profile
  profile() {
    return fetch('https://webdev-2018-ysmolyar-angularjs.herokuapp.com/api/profile',
      {
        credentials: 'include'
      }).then(response => response.json());
  }

  updateUser(user) {
    return fetch('https://webdev-2018-ysmolyar-angularjs.herokuapp.com/api/profile', {
      body: JSON.stringify(user),
      credentials: 'include',
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }


  isLoggedIn() {
    return fetch('https://webdev-2018-ysmolyar-angularjs.herokuapp.com/api/login/loggedin', {
      credentials: 'include'
    });
  }

  register(user) {

    const url = 'https://webdev-2018-ysmolyar-angularjs.herokuapp.com/api/register';
    return fetch(url,
      {
        body: JSON.stringify(user),
        credentials: 'include',
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        }
      }).then(response => response.json());
  }



}
