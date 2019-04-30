import { Injectable } from '@angular/core';
import { NewUser} from './nUser';

import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  private newUserURL = 'localhost:8080/new'; // check to see if root is correct

  constructor(
    private http: HttpClient
  ) { }

  createUser(user: NewUser): Observable<any> {
    return this.http.put(this.newUserURL, user);
  }
}
