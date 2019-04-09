import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {UserServiceService} from '../user-service.service';
// http://gnomeontherun.com/2017/03/02/guards-and-login-redirects-in-angular/

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: '';
  password: '';
  return: '';

  constructor(
    private userService: UserServiceService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    // Get the query params
    this.route.queryParams
      .subscribe(params => this.return = params['return'] || '/forums');
  }

  login() {
    /*
    if (this.username && this.password) {
      this.userService.login(this.username);
      this.router.navigateByUrl(this.return);
    */
    if (this.username === '' && this.password === '' ) {
      this.router.navigateByUrl(this.return);
    }
  }
}
