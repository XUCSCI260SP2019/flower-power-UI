import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService} from '../user-service.service';
import { Location } from '@angular/common';
import { RUser} from '../returnedUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userServiceService: UserServiceService,
    private location: Location

  ) {}
  login(username: string, password: string, student: boolean, professor: boolean): void {
    this.userServiceService.doLogin({username, password, student, professor} as User)
      .subscribe((user) => {
        if (user.email === '' ) {
          this.userServiceService.setLoggedIn();
        } else {
          this.userServiceService.setLoggedOut();
        }
        console.log(user.email);
        this.goBack();
      });
   }

  // this might no be working? it's not currently called anywhere, so call it after going login?
  goBack(): void {
    this.location.go('/home');
  }

  ngOnInit() {
  }
}
