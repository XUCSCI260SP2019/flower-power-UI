import { Component, OnInit } from '@angular/core';
import { NewUserService} from '../new-user.service';
import { NewUser} from '../nUser';
import {Location} from '@angular/common';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(
    private newUserService: NewUserService,
    private location: Location
  ) { }

  create(first: string, last: string, uname: string, psw: string, email: string, phone: string, professor: boolean): void {
    this.newUserService.createUser({first, last, uname, psw, email, phone, professor} as NewUser).subscribe(() => this.goBack());
  }

  // this might no be working? it's not currently called anywhere, so call it after going login?
  goBack(): void {
    this.location.go('/home');
  }

  ngOnInit() {
  }

}
