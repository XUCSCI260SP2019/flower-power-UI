import { Injectable } from '@angular/core';
import { User } from './user';

import { HttpClientJsonpModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(
    // private http: HttpClientJsonpModule, // this line isn't correct, causing login page to crash
  ) {}
  doLogin(user: User): void { }

  // look at hero.service to post user to url for back-end services
}
