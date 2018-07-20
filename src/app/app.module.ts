// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Library
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { KycComponent } from './components/kyc/kyc.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserInfoDetailComponent } from './components/user-info-detail/user-info-detail.component';
import { BankAccountComponent } from './components/bank-account/bank-account.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    KycComponent,
    UserInfoComponent,
    UserInfoDetailComponent,
    BankAccountComponent,
    HomeComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
