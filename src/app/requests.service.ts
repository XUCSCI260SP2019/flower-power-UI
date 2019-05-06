import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Request} from './request';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  private newPendingURL = 'http://localhost:8080/pending';

  constructor(
    private http: HttpClient
  ) { }

  showPendingList(id: number): Observable<PendingRequests[]> { // get list of professors
    const url = `${this.newPendingURL}/${id}`
    console.log('Calling Pending List');
    return this.http.get<PendingRequests[]>(url);
  }
}
