import {Injectable} from '@angular/core';

@Injectable()
export class UserServiceClient {

  login = (user) => {
   return fetch('http://localhost:3000/login', {
     method: 'post',
     headers: {
       'content-type' : 'application-json'
     },
     body: JSON.stringify(user)
    });
  }
}
