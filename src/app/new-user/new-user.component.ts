import { Component, OnInit } from '@angular/core';
import { NewUserService} from '../new-user.service';
import { NewUser} from '../nUser';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(
    private newUserService: NewUserService
  ) { }

  create(first: string, last: string, uname: string, psw: string, email: string, phone: string, professor: boolean): void {
    this.newUserService.createUser({first, last, uname, psw, email, phone, professor} as NewUser).subscribe(() => this.goBack());
  }

  ngOnInit() {
  }

}
