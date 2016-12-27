
import { AccordionModule } from 'primeng/primeng';

import { Component, OnInit, ElementRef, ChangeDetectionStrategy, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from "@angular/router";

import { BackendService } from '../providers/backend.service';
//import {BreadcrumbsService} from '../services/breadcrumbs.service';
import { AppglobalsService } from '../providers/appglobals.service';

//import {Breadcrumb} from '../../components/navbar/breadcrumb';
import { Bundle } from '../domain/bundle';
//import {Tabs} from '../components/tabs';
//import {Tab} from '../components/tab';
//import {SubTab} from '../components/subtab';
//import {InlineHelp} from '../components/inlinehelp.component';

import { BundleStatePipe } from '../pipes/bundleState.pipe';
import { BundlesFilter } from '../pipes/bundlesFilter.pipe'

import { ErrorsComponent } from '../alerts/errors/errors.component';

/*import {PercentBarDirective} from '../../directives/percentBar.d3.directive'
import {AdjacencyDirective} from '../../directives/adjacency.directive'
import {D3PkgDepDirective} from '../../directives/d3pkgDep.directive'
import {D3ServiceDepDirective} from '../../directives/d3serviceDep.directive'
import {D3BundleSizesDirective} from '../../directives/d3bundlesizes.directive'*/

declare var jQuery: any;

@Component({
    selector: 'app-bundles',
    templateUrl: './bundles.component.html',
    styleUrls: ['./bundles.component.css'],
})
export class BundlesComponent implements OnInit {

    bundles: Bundle[];
    searchId: string = "";
    public searchName: string = '';
    filteredCount: number = 0;

    bundleIdList: string[] = [];

    value: number;
    maxSize: number = 0;
    size: number;

    hidePageHelpFor: string = '';
    alerts:any;

    constructor(private router: Router, private _backend: BackendService, private _appGlobals: AppglobalsService) {
        _appGlobals._alerts.subscribe(value => this.alerts = value);
        _appGlobals._filteredCount.subscribe(value => this.filteredCount = value);
        this.hidePageHelpFor = localStorage.getItem('pageHelpBundles');
        if (this.hidePageHelpFor == null) {
            this.hidePageHelpFor = '';
        }
    }

    onSelect(bundle: Bundle) {
        //this.router.navigate(['/bundles', bundle.id]);
        //this._breadcrumbService.add(new Breadcrumb(['bundle'], "hier"));
    }

    ngOnInit() {
        this._appGlobals.setIsLoading(true);
        this._backend.getBundles()
            .subscribe(res => {
                this.bundles = res;
                this.bundles.forEach(bundle => {
                    this.bundleIdList.push(bundle.id);
                    if (bundle.size > this.maxSize) {
                        this.maxSize = bundle.size;
                    }
                });
                this._appGlobals.setBundleIdList(this.bundleIdList);
                this._appGlobals.setIsLoading(false);
            }, error => {
                console.log("adding error to alertsService...");
                //this._alertsService.setError("could not access backend, please check configuration.");
                this._appGlobals.setAlerts("could not access backend, please check configuration.");
                this.logError("Error2: " + error);
            });
    }

    //msgs: Message[];

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

}
