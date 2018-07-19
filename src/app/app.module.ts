// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    KycComponent,
    UserInfoComponent,
    UserInfoDetailComponent,
    BankAccountComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
