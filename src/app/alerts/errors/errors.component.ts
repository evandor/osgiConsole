import { Component, OnInit } from '@angular/core';

import { AppglobalsService } from '../../providers/appglobals.service';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {

  errors: string[];

  constructor(private _appglobals: AppglobalsService) {
    this._appglobals._alerts.subscribe(value => this.errors = value);
  }

  ngOnInit() {
  }

}
