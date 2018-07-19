// Angular
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info-detail',
  templateUrl: './user-info-detail.component.html',
  styleUrls: ['./user-info-detail.component.scss']
})
export class UserInfoDetailComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit() {
  }

  goToPrevious() {
    this._route.navigate(['user-info']);
  }

}
