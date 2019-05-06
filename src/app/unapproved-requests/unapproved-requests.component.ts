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
  pending: PendingRequests[];

  constructor(
    private requestsService: RequestsService,
    private profDetailsService: ProfDetailsService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.getProfessor();
    this.requestsService.showPendingList(this.id).subscribe(pend => {
      this.pending = pend;
      console.log(pend);
    });
  }

  getProfessor(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.profDetailsService.showProfDetails(id).subscribe(profs => {
      this.professors = profs;
      console.log(profs);
    });
    console.log(this.professors);
  }

}
