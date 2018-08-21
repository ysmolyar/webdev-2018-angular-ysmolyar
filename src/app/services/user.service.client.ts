import {Injectable} from '@angular/core';

@Injectable()
export class UserServiceClient {

  HEROKU = 'https://webdev-ysmolyar-nodejs.herokuapp.com';
  LOCALHOST = 'http://localhost:3000';

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch(this.HEROKU + '/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  logout() {
    return fetch(this.HEROKU + '/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  // https://webdev-ysmolyar-nodejs.herokuapp.com/api/profile
  profile() {
    return fetch(this.HEROKU + '/api/profile',
      {
        credentials: 'include'
      }).then(response => response.json());
  }

  updateUser(user) {
    return fetch(this.HEROKU + '/api/profile', {
      body: JSON.stringify(user),
      credentials: 'include',
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }


  currentUser() {
    return fetch(this.HEROKU + '/api/currentUser', {
      credentials: 'include'
    }).then((response) => (
        response.json()),
      error => {
        console.log('Error is because there is no current user.');
      });
  }


  register(user) {

    const url = this.HEROKU + '/api/register';
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
