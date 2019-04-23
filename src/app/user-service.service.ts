import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() {}
  doLogin(user: User): void { }

  // look at hero.service to post user to url for back-end services
}
