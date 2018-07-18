// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UserInfoDetailComponent } from './components/user-info-detail/user-info-detail.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { KycComponent } from './components/kyc/kyc.component';
import { BankAccountComponent } from './components/bank-account/bank-account.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-info', component: UserInfoComponent },
  { path: 'user-info-detail', component: UserInfoDetailComponent },
  { path: 'kyc', component: KycComponent },
  { path: 'bank-account', component: BankAccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
