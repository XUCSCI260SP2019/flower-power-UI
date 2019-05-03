import { Component, OnInit } from '@angular/core';
import { ProfDetailsService } from '../prof-details.service';
import {ProfDetails} from '../prof-details';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-prof-menu',
  templateUrl: './prof-menu.component.html',
  styleUrls: ['./prof-menu.component.css']
})
export class ProfMenuComponent implements OnInit {
  professors: ProfDetails;
  id: number;

  constructor(
      private profDetailsService: ProfDetailsService,
      private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
      this.getProfessor();
    }

    getProfessor(): void {
        const id: number = +this.route.snapshot.paramMap.get('id');
        this.profDetailsService.showProfDetails(id).subscribe(profs => {
          this.professors = profs;
          console.log(profs);
        });
        console.log(this.professors);
      }

}
