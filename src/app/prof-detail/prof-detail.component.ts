import { Component, OnInit } from '@angular/core';
import { ProfDetailsService} from '../prof-details.service';
import {ProfDetails} from '../prof-details';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prof-detail',
  templateUrl: './prof-detail.component.html',
  styleUrls: ['./prof-detail.component.css']
})
export class ProfDetailComponent implements OnInit {
  professors: ProfDetails;
  id: number

  constructor(
    private profDetailsService: ProfDetailsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getProfessor();
  }

  getProfessor(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.profDetailsService.showProfDetails(id);
  }

}
