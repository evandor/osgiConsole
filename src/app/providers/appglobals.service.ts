import { Injectable, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ConfigService } from '../providers/config.service';

import { BackendConfig } from '../domain/backendconfig'

@Injectable()
export class AppglobalsService {

  public _isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public _filteredCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public _bundleIdList: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public _routeParams: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public _config: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  public _alerts: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor(private _configService: ConfigService) {
    var backendConfigString = localStorage.getItem('backend');
    if (backendConfigString != null) {
      var backendConfig = JSON.parse(backendConfigString);
      this.setConfig(new BackendConfig(backendConfig['username,'],backendConfig['password'],backendConfig['endpoint'],backendConfig['name']));
    } else {
      this.setConfig(new BackendConfig("webconsole","webconsole","http://" + location.hostname + ":2002/backend/v1","default"));
    }
  }

  setIsLoading(isLoading: boolean) {
    this._isLoading.next(isLoading);
  }

  setFilteredCount(count: number) {
    this._filteredCount.next(count);
  }

  setConfig(config: BackendConfig) {
    this._config.next(config);
  }

  setBundleIdList(theList: string[]) {
    console.log(theList);
    this._bundleIdList.next(theList);
  }

  setRouteParams(params: any) {
    this._routeParams.next(params);
  }

  setAlerts(params: any) {
    this._alerts.next(params);
  }

}
