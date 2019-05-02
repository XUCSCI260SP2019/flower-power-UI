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
  private newProfSingleURL = 'http://localhost:8080/professors/';
  public professor: ProfDetails;

  constructor(
    private http: HttpClient
   ) { }

   showProfList(): Observable<ProfDetails[]> { // get list of professors
    return this.http.get<ProfDetails[]>(this.newProfDetailsURL);
   }
   showProfDetails(prof: ProfDetails): Observable<ProfDetails> { // get details for one professor
      const url = `${this.newProfSingleURL}/${prof.id}`
      return this.http.get<ProfDetails>(this.newProfSingleURL);
   }
}


