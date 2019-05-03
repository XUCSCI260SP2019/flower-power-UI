import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProfDetailsService} from '../prof-details.service';
import {ProfDetails} from '../prof-details';

@Component({
  selector: 'app-prof-signin',
  templateUrl: './prof-signin.component.html',
  styleUrls: ['./prof-signin.component.css']
})
export class ProfSigninComponent implements OnInit {
  professor: ProfDetails[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private profDetailsService: ProfDetailsService
    ) { }

  ngOnInit() {
    this.profDetailsService.showProfList().subscribe(profs => {
      this.professor = profs;
      console.log(profs);
      });

    }
 }
