import { Component, OnInit } from '@angular/core';
import {RequestsService} from '../requests.service';
import {ProfDetailsService} from '../prof-details.service';
import {ActivatedRoute} from '@angular/router';
import {ProfDetails} from '../prof-details';

@Component({
  selector: 'app-approved-requests',
  templateUrl: './approved-requests.component.html',
  styleUrls: ['./approved-requests.component.css']
})
export class ApprovedRequestsComponent implements OnInit {
  professors: ProfDetails;
  id: number;
  approved: ApprovedRequests[];

  constructor(
    private requestsService: RequestsService,
    private profDetailsService: ProfDetailsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getProfessor();
    this.requestsService.showApprovedList(this.id).subscribe(appr => {
      this.approved = appr;
      console.log(appr);
    });
  }

  getProfessor(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.profDetailsService.showProfDetails(this.id).subscribe(profs => {
      this.professors = profs;
      console.log(profs);
    });
    console.log(this.professors);
  }

}
