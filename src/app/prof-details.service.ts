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

   showProfList(): Observable<ProfDetails[]> { // get list of professors
    console.log('Calling Professor List');
    return this.http.get<ProfDetails[]>(this.newProfDetailsURL);
   }
   showProfDetails(id: number): Observable<ProfDetails> { // get details for one professor
      const url = `${this.newProfDetailsURL}/${id}`
      console.log(id);
      return this.http.get<ProfDetails>(url);
   }
}


