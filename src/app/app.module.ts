import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { routing, appRoutingProviders }  from './app.routing';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {AccordionModule, TabViewModule } from 'primeng/primeng';

import { BundlesComponent } from './bundles/bundles.component';
import { ServicesComponent } from './services/services.component';

import {BundlesFilter} from './pipes/bundlesFilter.pipe';
import {BundleStatePipe} from './pipes/bundleState.pipe';

import { AppglobalsService } from './providers/appglobals.service';
import { BackendService } from './providers/backend.service';
import { ConfigService } from './providers/config.service';
import { ConfigComponent } from './config/config.component';
import { ErrorsComponent } from './alerts/errors/errors.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BundlesComponent,
    ServicesComponent,
    BundlesFilter, 
    BundleStatePipe, ConfigComponent, ConfigComponent, ErrorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //NgbModule,
    AccordionModule,
    TabViewModule,
    routing
  ],
  providers: [appRoutingProviders, AppglobalsService, BackendService, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
