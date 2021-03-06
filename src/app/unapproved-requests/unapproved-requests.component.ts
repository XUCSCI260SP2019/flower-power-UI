import { Component, OnInit } from '@angular/core';
import { RequestsService} from '../requests.service';
import {ProfDetails} from '../prof-details';
import { ActivatedRoute } from '@angular/router';
import {ProfDetailsService} from '../prof-details.service';

@Component({
  selector: 'app-unapproved-requests',
  templateUrl: './unapproved-requests.component.html',
  styleUrls: ['./unapproved-requests.component.css']
})
export class UnapprovedRequestsComponent implements OnInit {
  professors: ProfDetails;
  id: number;
  pending: Request[];

  constructor(
    private requestsService: RequestsService,
    private profDetailsService: ProfDetailsService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.getProfessor();
    console.log('pending is being called');
    this.requestsService.showPendingList(this.id).subscribe(pend => {
      this.pending = pend;
      console.log('please be logging', this.pending);
    });
  }

  getProfessor(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.profDetailsService.showProfDetails(this.id).subscribe(profs => {
      this.professors = profs;
      console.log('profs', profs);
    });
    console.log(this.professors);
  }

  // approve(): void {
  //   this.requestsService.approveMeeting('id', )
  // }

}
