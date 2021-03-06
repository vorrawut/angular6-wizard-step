// Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit() {
  }

  goToPrevious(form: any) {
    this._route.navigate(['/kyc']);
  }

  goToNext(form: any) {
    this._route.navigate(['/user-info-detail']);
  }

}
