import { Injectable } from '@angular/core';
import { NewUser} from './prof-details';

import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'appication/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProfDetailsService {
  private newProfDetailsURL = 'localhost:8080/prof-details' // root

  constructor(
    private http: HttpClient
   ) { }

   showProfDetails(prof: profDetails): Observable<any>{
    return this.http.put(this.newProfDetailsURL, prof);
   }
}


