import { Component, OnInit } from '@angular/core';
import { ReservationsService} from '../reservations.service';
import { Request } from '../request';

@Component({
  selector: 'app-reserve-time',
  templateUrl: './reserve-time.component.html',
  styleUrls: ['./reserve-time.component.css']
})
export class ReserveTimeComponent implements OnInit {
  name: string;
  startminutes: string;
  starthours: string;
  starttime: string;
  endminutes: string;
  endhours: string;
  endtime: string;

  constructor(
    private reservationsService: ReservationsService,
  ) { }

  ngOnInit() {
  }

  reserveTime(): void {
    this.starttime = this.starthours + this.startminutes;
    this.endtime = this.endhours + this.endminutes;
    console.log('this.reserveTime is called');
    this.reservationsService.requestTime(this.starttime, this.endtime, this.name);
  }

  studentName(name: string): void {
    console.log('student name is called');
    this.name = name;
  }

  startTimeMinute(mins: string): void {
    console.log('start minutes is recorded?');
    this.startminutes = mins;
  }

  startTimeHour(hrs: string): void {
    console.log('start hour is recorded');
    this.starthours = hrs;
  }

  endTimeMinute(emins: string): void {
    console.log('end time is reorded');
    this.endminutes = emins;
  }

  endTimeHour(ehrs: string): void {
    console.log('end hour is recorded');
    this.endhours = ehrs;
  }
}

