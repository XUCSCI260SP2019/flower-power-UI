import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService} from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userServiceService: UserServiceService) { } // create login function: to send to user.service

  login(username: string, password: string): void {
    this.userServiceService.doLogin({username, password} as User);
  }

  ngOnInit() {
  }

}
