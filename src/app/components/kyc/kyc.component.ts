// Angular
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.component.html',
  styleUrls: ['./kyc.component.scss']
})
export class KycComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit() {
  }

  goToPrevious(form: any) {
    this._route.navigate(['/login']);
  }

  goToNext(form: any) {
    this._route.navigate(['/user-info']);
  }


}
