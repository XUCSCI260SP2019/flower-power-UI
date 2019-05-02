import { Component, OnInit } from '@angular/core';
import { ProfDetailsService} from '../prof-details.service';

@Component({
  selector: 'app-prof-list',
  templateUrl: './prof-list.component.html',
  styleUrls: ['./prof-list.component.css']
})
export class ProfListComponent implements OnInit {
  professor: any;

  constructor(private profDetailsService: ProfDetailsService) { }

  ngOnInit() {
    this.profDetailsService.showProfDetails();
  }

}
