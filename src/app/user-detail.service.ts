import { Injectable } from '@angular/core';
import { UserDetails} from './user-detail'

import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  private userDetailsURL = 'localhost:8080/userdetails' // going to have to find out root

  constructor(
    private http: HttpClient
   ) { }

   userDetails(user: currentUser): Observable<any> {
    return this.http.put(this.userDetailsURL, user);
   }
}
