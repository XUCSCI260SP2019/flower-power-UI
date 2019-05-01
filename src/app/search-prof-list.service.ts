import { Injectable } from '@angular/core';
import { UserDetails} from './search-prof-list'

import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SearchProfListService {

  private searchProfURL =  'localhost:8080/search' // find out root!
  constructor(
    private http: HttpClient
   ) { }

   searchProf(prof: profList): Observable<any>{
    return this.http.put(this.searchProfURL, prof);
   }
}

