import { Component, OnInit } from '@angular/core';
import { ReservationsService} from '../reservations.service';
import { Request } from '../request';

@Component({
  selector: 'app-reserve-time',
  templateUrl: './reserve-time.component.html',
  styleUrls: ['./reserve-time.component.css']
})
export class ReserveTimeComponent implements OnInit {

  constructor(
    private reservationsService: ReservationsService,
    private request: Request
  ) { }

  ngOnInit() {
  }

  // reserveTime(starttime: string, endtime: string, fullname: string): void {
  //   this.reservationsService.requestTime(starttime, endtime, fullname);
  // }
}

