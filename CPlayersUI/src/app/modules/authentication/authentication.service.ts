import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  * as jwt_decode from 'jwt-decode';

export const TOKEN_NAME:string = "jwt_token";

@Injectable()
export class AuthenticationService {

  serviceEndpoint:string = "http://localhost:4519/api/v1/userservice";
  token:string;

  constructor(private http: HttpClient) { }

  registerUser(newUser) {
    const url = `${this.serviceEndpoint}/register`;
    return this.http.post(url, newUser, {responseType: 'text'});
  }

  loginUser(user):Observable<any> {
    const url = `${this.serviceEndpoint}/login`;
    return this.http.post(url, user);
  }

  setToken(token:string) {
    console.log(token);
    
    return localStorage.setItem(TOKEN_NAME, token);
  }

  getToken() {
    return localStorage.getItem(TOKEN_NAME);
  }

  deleteToken() {
    return localStorage.removeItem(TOKEN_NAME);
  }

  getTokenExpirationDate(token: string) {
    const decoded = jwt_decode(token);
    if(decoded.exp === undefined) {
      return null;
    }
    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if(!token) 
      token = this.getToken();
    
    if(!token) {
      return true;
    }
    const date = this.getTokenExpirationDate(token);
    if(date === undefined || date === null) {
      return false;
    }
    return !(date.valueOf() > new Date().valueOf());
  }
}