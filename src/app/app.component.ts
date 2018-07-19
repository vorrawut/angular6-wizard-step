// Angular
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isHome = true;

  constructor(private _location: Location) { }

  ngOnInit() {
    if (this._location.isCurrentPathEqualTo('')) {
      this.isHome = false;
    } else {
      this.isHome = true;
    }
  }

  back() {
    this._location.back();
  }
}
