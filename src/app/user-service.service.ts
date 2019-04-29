import { Injectable } from '@angular/core';
import { User } from './user';

import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private loginUrl = 'localhost:8080/login';

  constructor(
    private http: HttpClient
  ) {}

  doLogin(user: User): Observable<any> {
    return this.http.put(this.loginUrl, user);
  }
  // create function to receive user

  getUser(): Observable<User> {
    const url = `${this.loginUrl}/${'*'}`;
    return this.http.get<User>(url);
  }


}
