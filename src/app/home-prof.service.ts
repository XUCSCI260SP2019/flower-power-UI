import { Injectable } from '@angular/core';
import { UserDetails} from './home-prof'

import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HomeProfService {

  private homeProfURL = 'localhost:8080/prof' // root
  constructor(
    private http: HttpClient
  ) { }

  homeProf(prof: profListHome): Observable<any> {
    return this.http.put(this.homeProfURL, prof);
  }
}


