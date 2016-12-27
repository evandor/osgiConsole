import { Component, OnInit } from '@angular/core';

import { AppglobalsService } from '../providers/appglobals.service'
import { BackendConfig } from '../domain/backendconfig';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentMenuItem: string = "Bundles";
  configName: string = "default";
  config: BackendConfig = new BackendConfig("user","pass","endpoint","name");
  model = 1;

  constructor(private _appglobals: AppglobalsService) { 
    this._appglobals._config.subscribe(value => this.config = value);
  }

  ngOnInit() {
  }

  getBundlesMenuTitle() {
    var bundlesCount: number;
    return "Bundles";//(" + bundlesCount + ")";
  }

  checkActive(menuItem: string) {
    if (menuItem == this.currentMenuItem) {
      return "nav-item active";
    }
    return "nav-item";
  }
}
