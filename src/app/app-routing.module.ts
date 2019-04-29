import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {SearchComponent} from './search/search.component';
import {LoginComponent} from './login/login.component';
import {ProfDetailComponent} from './prof-detail/prof-detail.component';
import {MyProfsComponent} from './my-profs/my-profs.component';
import {UserComponent} from './user/user.component';
import {BarComponent} from './bar/bar.component';
import {HeaderComponent} from './header/header.component';
import {LogoutComponent} from './logout/logout.component';
import {ApprovedRequestsComponent} from './approved-requests/approved-requests.component';
import {UnapprovedRequestsComponent} from './unapproved-requests/unapproved-requests.component';
import {ReserveTimeComponent} from './reserve-time/reserve-time.component';
import {ProfListComponent} from './prof-list/prof-list.component';
import {NewUserComponent} from './new-user/new-user.component';

import {AuthGuardService as AuthGuard} from './auth-guard.service';

const routes: Routes = [
  { path : '', redirectTo: '/login', pathMatch: 'full'},
  { path : 'new', component: NewUserComponent},
  { path : 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard]  },
  { path : 'prof-detail', component: ProfDetailComponent, canActivate: [AuthGuard] },
  { path : 'my-prof', component: MyProfsComponent, canActivate: [AuthGuard] },
  { path : 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path : 'bar', component: BarComponent, canActivate: [AuthGuard] },
  { path : 'header', component: HeaderComponent, canActivate: [AuthGuard] },
  { path : 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
  { path : 'approved', component: ApprovedRequestsComponent, canActivate: [AuthGuard] },
  { path : 'pending', component: UnapprovedRequestsComponent, canActivate: [AuthGuard] },
  { path : 'reserve', component: ReserveTimeComponent, canActivate: [AuthGuard] },
  { path : 'profs', component: ProfListComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
