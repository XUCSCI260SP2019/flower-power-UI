import { Injectable } from '@angular/core';
import { User } from './user';
import { RUser } from './returnedUser';

import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private loginUrlS = 'http://localhost:8080/students/{id}';
  private loginUrlP = 'http://localhost:8080/professors/{id}';
  public loggedInUser: RUser;
  constructor(
    private http: HttpClient
  ) {
    this.loggedInUser = new RUser();
  }

  doLogin(user: User): Observable<RUser> {
    if (user.student === true) {
      return this.http.post<RUser>(this.loginUrlS, user).pipe(tap(nuser => this.loggedInUser = nuser));
    }
    return this.http.post<RUser>(this.loginUrlP, user).pipe(tap(nuser => this.loggedInUser = nuser));
  }
  // create function to receive user

  setLoggedIn() {
    this.loggedInUser.loggedIn = true;
  }

  setLoggedOut() {
    this.loggedInUser.loggedIn = false;
  }


}
