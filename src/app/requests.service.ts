import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  private newPendingURL = 'http://localhost:8080/pending';
  private newApprovedURL = 'http://localhost:8080/approved';

  constructor(
    private http: HttpClient
  ) { }

  showPendingList(id: number): Observable<Request[]> { // get list of pending requests
    console.log('id', id);
    const url = `${this.newPendingURL}/${id}`;
    console.log(url);
    return this.http.get<Request[]>(url);
  }

  showApprovedList(id: number): Observable<Request[]> { // get list of approved requests
    const url = `${this.newApprovedURL}/${id}`;
    console.log('id', id);
    return this.http.get<Request[]>(url);
  }
}
