import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {ProfDetailComponent} from './prof-detail/prof-detail.component';
import {BarComponent} from './bar/bar.component';

import {HeaderComponent} from './header/header.component';
import {LogoutComponent} from './logout/logout.component';
import {ApprovedRequestsComponent} from './approved-requests/approved-requests.component';
import {UnapprovedRequestsComponent} from './unapproved-requests/unapproved-requests.component';
import {ReserveTimeComponent} from './reserve-time/reserve-time.component';
import {ProfListComponent} from './prof-list/prof-list.component';
import {ProfSigninComponent} from './prof-signin/prof-signin.component';
import {ProfMenuComponent} from './prof-menu/prof-menu.component';

const routes: Routes = [
  { path : '', redirectTo: '/login', pathMatch: 'full'},
  { path : 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path : 'prof-detail/:id', component: ProfDetailComponent },
  { path : 'bar', component: BarComponent},
  { path : 'header', component: HeaderComponent},
  { path : 'logout', component: LogoutComponent},
  { path : 'approved/:id', component: ApprovedRequestsComponent},
  { path : 'pending/:id', component: UnapprovedRequestsComponent },
  { path : 'reserve', component: ReserveTimeComponent},
  { path : 'profs', component: ProfListComponent},
  { path: 'prof-signin', component: ProfSigninComponent},
  {path: 'prof-menu/:id', component: ProfMenuComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
