import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {SearchComponent} from './search/search.component';
import {LoginComponent} from './login/login.component';
import {ProfDetailComponent} from './prof-detail/prof-detail.component';
import {MyProfsComponent} from './my-profs/my-profs.component';
import {UserComponent} from './user/user.component';

const routes: Routes = [
  { path : '', redirectTo: '/homePage', pathMatch: 'full'},
  { path: 'homePage', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path : 'login', component: LoginComponent},
  { path : 'prof-detail', component: ProfDetailComponent},
  { path : 'my-prof', component: MyProfsComponent},
  { path : 'user', component: UserComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
