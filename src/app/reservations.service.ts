import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {
  private newReserveURL = 'http://localhost:8080/reservations';

  constructor(
    private http: HttpClient
  ) { }

  requestTime(id: number, starttime: string, endtime: string, fullname: string): Observable<Request> { // get details for one professor
    const url = `${this.newReserveURL}/${id}/${starttime}/${endtime}/${fullname}`;
    return this.http.get<Request>(url);
  }
}
