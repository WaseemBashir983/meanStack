// import { Injectable } from '@angular/core';
// import { Http, Headers, RequestOptions } from '@angular/http';
// //import { tokenNotExpired } from 'angular2-jwt';
// import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

   apiUrl = 'http://localhost:3000/';  // URL to web api
   authToken;
   user;
   options;

  constructor(private http: Http) { }

  registerUser(user) {
    return this.http.post(this.apiUrl + 'api/register', user).pipe(map(res => res.json()));
  }

  checkEmail(email) {
    return this.http.get(this.apiUrl + 'api/checkEmail/' + email).pipe(map(res => res.json()));
  }

login(user) {
  return this.http.post(this.apiUrl + 'api/login', user).pipe(map(res => res.json()));
}

logout(){
this.authToken = null;
this.user = null;
localStorage.clear();
}
getprofile() {
  this.addAuthHeaders();
  return this.http.get(this.apiUrl + 'api/profile/' , this.options).pipe(map(res => res.json()));
}

  saveUserData(token , user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

loadToken() {
const token = localStorage.getItem('token');
this.authToken = token;

}

addAuthHeaders() {
this.loadToken();
this.options = new RequestOptions({

headers : new Headers ({
  'Content-Type' : 'application/json',
  'authorization' : this.authToken
})
});
}

LoggedIn() {

  return tokenNotExpired();
}

}
