import { Injectable } from '@angular/core';
import { ProfDetails } from './prof-details';


import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'appication/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProfDetailsService {
  private newProfDetailsURL = 'http://localhost:8080/professors'; // root
  public professor: ProfDetails;

  constructor(
    private http: HttpClient
   ) { }

   showProfList(prof: ProfDetails): Observable<ProfDetails> { // get list of professors
    return this.http.put(this.newProfDetailsURL, prof);
   }
   showProfDetails(prof: ProfDetails): Observable<ProfDetails> { // get details for one professor
     return this.http.put(this.newProfDetailsURL, prof);
   }
}


