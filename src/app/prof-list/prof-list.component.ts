import { Component, OnInit } from '@angular/core';
import { ProfDetailsService} from '../prof-details.service';
import {ProfDetails} from '../prof-details';

@Component({
  selector: 'app-prof-list',
  templateUrl: './prof-list.component.html',
  styleUrls: ['./prof-list.component.css']
})
export class ProfListComponent implements OnInit {
  professors: ProfDetails[];

  constructor(private profDetailsService: ProfDetailsService) { }

  ngOnInit() {
    this.profDetailsService.showProfList().subscribe(profs => {
      this.professors = profs;
      console.log(profs);
    });
  }
  // professor name isn't link yet

}
