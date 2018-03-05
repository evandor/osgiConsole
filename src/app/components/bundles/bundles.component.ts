import { Component, OnInit, ElementRef, ChangeDetectionStrategy, OnChanges, Input, Output, EventEmitter } from '@angular/core';
//import { AccordionModule } from 'primeng/primeng';

//import { NgFor } from '@angular/common';
import { Router } from "@angular/router";

import { BackendService } from '../../providers/backend/backend.service';
import { AppGlobalsService } from '../../app-globals.service';

import { Bundle } from '../../domain/bundle';
import { BundleStatePipe } from '../../bundle-state.pipe';
import { BundlesFilterPipe } from '../../bundles-filter.pipe'

//import { ErrorsComponent } from '../alerts/errors/errors.component';

@Component({
  selector: 'app-bundles',
  templateUrl: './bundles.component.html',
  styleUrls: ['./bundles.component.css']
})
export class BundlesComponent implements OnInit {

  bundles: Bundle[];

  selectedBundle: Bundle = null;

  searchId: string = "";
  public searchName: string = '';
  filteredCount: number = 0;

  bundleIdList: string[] = [];

  value: number;
  maxSize: number = 0;
  size: number;

  hidePageHelpFor: string = '';
  alerts: any;

  constructor(private router: Router, private _backend: BackendService/*, private _appGlobals: AppGlobalsService*/) {
    //_appGlobals._alerts.subscribe(value => this.alerts = value);
    //_appGlobals._filteredCount.subscribe(value => this.filteredCount = value);
    this.hidePageHelpFor = localStorage.getItem('pageHelpBundles');
    if (this.hidePageHelpFor == null) {
      this.hidePageHelpFor = '';
    }
  }


  ngOnInit() {
    console.log("hier!!")
    //this._appGlobals.setIsLoading(true);
    this._backend.getBundles()
      .subscribe(res => {
        this.bundles = res;
        this.bundles.forEach(bundle => {
          this.bundleIdList.push(bundle.id);
          if (bundle.size > this.maxSize) {
            this.maxSize = bundle.size;
          }
        });
        //this._appGlobals.setBundleIdList(this.bundleIdList);
        //this._appGlobals.setIsLoading(false);
      }, error => {
        console.log("adding error to alertsService...");
        //this._alertsService.setError("could not access backend, please check configuration.");
        //this._appGlobals.setAlerts("could not access backend, please check configuration.");
        this.logError("Error2: " + error);
      });
  }

  onTabClose(event) {
    //this.msgs = [];
    //this.msgs.push({severity:'info', summary:'Tab Closed', detail: 'Index: ' + event.index});
  }

  onTabOpen(event) {
    //this.msgs = [];
    //this.msgs.push({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
  }

  getBarChartTitle(title: string) {
    return "<i class='fa fa-bar-chart'></i> " + title;
  }

  clicked() {
    console.log("clicked");
  }

  logError(err) {
    console.error('There was an error: ' + err);
  }

  getPercentChartSpanId(id: string) {
    return "chartSpanId_" + id;
  }

  setData(value, max, size) {
    this.value = value;
    this.maxSize = max;
    this.size = size;
  }

  isShown(id: string): boolean {
    var str = localStorage.getItem('pageHelpBundles') as string;
    if (str == null) {
      return true;
    }
    return (str.indexOf("," + id) === -1);
  }

  hidePermanently(id: string) {
    this.hidePageHelpFor += "," + id;
    localStorage.setItem('pageHelpBundles', this.hidePageHelpFor);
    //this.pageHelp.set('show_' + id, false);
  }

  showAllInlineHelp() {
    this.hidePageHelpFor = '';
    localStorage.removeItem('pageHelpBundles');
  }

  click2(name) {
    this.router.navigateByUrl('/bundles/0');
  }
}
