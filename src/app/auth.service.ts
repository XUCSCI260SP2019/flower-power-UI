import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

import { rUser } from './returnedUser';


@Injectable()
export class AuthService {
  constructor(public jwtHelper: JwtHelperService) {}
  public isAuthenticated(): boolean {
    const token = rUser.login(); // get whether true or false from
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }
}
