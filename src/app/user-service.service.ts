import { Injectable } from '@angular/core';
import { User } from './user';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(
    private http: HttpClient,
  ) {}
  doLogin(user: User): void { }

  // look at hero.service to post user to url for back-end services
}
