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
    }).then(response => response.json());
  }

  logout() {
    return fetch('http://localhost:3000/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  // https://webdev-ysmolyar-nodejs.herokuapp.com/api/profile
  profile() {
    return fetch('http://localhost:3000/api/profile',
      {
        credentials: 'include'
      }).then(response => response.json());
  }

  updateUser(user) {
    return fetch('http://localhost:3000/api/profile', {
      body: JSON.stringify(user),
      credentials: 'include',
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }


  isLoggedIn() {
    return fetch('http://localhost:3000/api/login/loggedin', {
      credentials: 'include'
    });
  }

  register(user) {

    const url = 'https://webdev-ysmolyar-nodejs.herokuapp.com/api/register';
    const localURL = 'http://localhost:3000/api/register';
    return fetch(localURL,
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
