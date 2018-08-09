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
    return fetch('http://localhost:3000/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  profile() {
    return fetch('http://localhost:3000/api/profile',
      {
        credentials: 'include',
      })
      .then(response => response.json());
  }

}
