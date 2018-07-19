// Angular
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _route: Router) { }
  ngOnInit() { }

  goToPrevious(form: any) {
    this._route.navigate(['']);
  }

  goToNext(form: any) {
    this._route.navigate(['/kyc']);
  }

}
