import { Component, OnInit, ElementRef, ChangeDetectionStrategy, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { NgFor, } from '@angular/common';
import { Router } from "@angular/router";

import { BackendService } from '../providers/backend.service';

import { BackendConfig } from '../domain/backendconfig';

import {AppglobalsService} from '../providers/appglobals.service'


@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  version: string;

  model = new BackendConfig('webconsole', 'webconsole', 'http://localhost:2002/backend/v1','default');
  
  onSubmit() { 
    console.log("changing endpoint to " + this.model.endpoint);
    this._appglobals.setConfig(this.model);
    localStorage.setItem('backend', JSON.stringify(this.model));
  }

  constructor(private _backend: BackendService, private _appglobals: AppglobalsService) { }

  ngOnInit() {
    this._backend.getVersion().subscribe(res => this.version = res);
    this._appglobals._config.subscribe(value => this.model = value);
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  // Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
  active = true;

  /*showFormControls(form: NgForm) {

    return form && form.controls['endpoint'] && form.controls['endpoint'].value;
  }*/

}

