import { Component, OnInit, ElementRef, ChangeDetectionStrategy, OnChanges, Input, Output, EventEmitter } from '@angular/core';
//import { Router } from "@angular/router";

import { BackendService } from '../../providers/backend/backend.service';
import { AppGlobalsService } from '../../app-globals.service';

import { Bundle } from '../../domain/bundle';
import { BundleStatePipe } from '../../bundle-state.pipe';
import { BundlesFilterPipe } from '../../bundles-filter.pipe'
import {  Router, ActivatedRoute } from "@angular/router";

//import {Tabs} from '../../components/tabs';
//import {Tab} from '../../components/tab';
//import {SubTab} from '../../components/subtab';


@Component({
    selector: 'app-bundles',
    templateUrl: './bundle.component.html',
    styleUrls: ['./bundle.component.css']
})
export class BundleComponent implements OnInit {

    bundle: Bundle = new Bundle();
    // capabilities: KeyValue[] = [];
    private sub: any;
    wires = [];//new Map<string, Capability[]>();
    public searchName: string = '';

    exportedPackagesNodes = [];

    //scrs: KeyValue[] = [];



    constructor(
        private router: Router,
        private _route: ActivatedRoute,
        private _backend: BackendService/*, private _appGlobals: AppGlobalsService*/) {
        //_appGlobals._alerts.subscribe(value => this.alerts = value);
        //_appGlobals._filteredCount.subscribe(value => this.filteredCount = value);
    }


    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            //this._appGlobals.setRouteParams(params);
            let id = params['id'];
            this.wires = [];

            this._backend.getBundle(id)
                .subscribe(res => {
                    //this._appGlobals.setIsLoading(true);
                    this.bundle = res;
                    //var props = <Map<string, string>>res.wireDescriptor.capabilities;
                    //var providedWires = res.wireDescriptor.providedWires;
                    var oldIdentifier = "";
                    var theValue = [];
                    /*if (providedWires != null) {
                        providedWires.forEach(wire => {
                            var identifier = wire.capability['id']
                            if (oldIdentifier != identifier) {
                                oldIdentifier = identifier;
                                this.wires[identifier] = Array<any>();
                            }
                            this.wires[identifier].push(wire);
                        });
                    }*/
                    /*this._backend.getBundleServices(this.bundle.id)
                        .subscribe(serviceRes => {
                            this.bundle.providedServices = serviceRes;
                        });*/

                    /*var treeModel: TreeModel = new TreeModel();
                    this.bundle.exportPackage.forEach(pkg => {
                        console.log("handling package " + pkg.pkgName);
                        this.handlePackage(treeModel, pkg);
                        console.log("[" + treeModel.root.children.toString() + "]");
                    });
                    this.exportedPackagesNodes = treeModel.root.children;
                    
                    var props = <Map<string, string>>res.scrMap;
                    for (var key in props) {
                        this.scrs.push(new KeyValue(key, props[key]));
                    };*/


                    //this._appGlobals.setIsLoading(false);
                }
                );
        });
    }
}
