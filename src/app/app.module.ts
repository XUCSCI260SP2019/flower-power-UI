import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ProfDetailComponent } from './prof-detail/prof-detail.component';
import { MyProfsComponent } from './my-profs/my-profs.component';
import { UserComponent } from './user/user.component';
import { BarComponent } from './bar/bar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { UnapprovedRequestsComponent } from './unapproved-requests/unapproved-requests.component';
import { ApprovedRequestsComponent } from './approved-requests/approved-requests.component';
import { ProfListComponent } from './prof-list/prof-list.component';
import { ReserveTimeComponent } from './reserve-time/reserve-time.component';
import { ProfSigninComponent } from './prof-signin/prof-signin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfDetailComponent,
    MyProfsComponent,
    UserComponent,
    BarComponent,
    HeaderComponent,
    FooterComponent,
    LogoutComponent,
    UnapprovedRequestsComponent,
    ApprovedRequestsComponent,
    ProfListComponent,
    ReserveTimeComponent,
    ProfSigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
