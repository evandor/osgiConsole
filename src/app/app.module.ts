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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BundlesComponent,
    ServicesComponent
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
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
