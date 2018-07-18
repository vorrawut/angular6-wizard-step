import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { KycComponent } from './components/kyc/kyc.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserInfoDetailComponent } from './components/user-info-detail/user-info-detail.component';
import { BankAccountComponent } from './components/bank-account/bank-account.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    KycComponent,
    UserInfoComponent,
    UserInfoDetailComponent,
    BankAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
