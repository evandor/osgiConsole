import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BundlesComponent } from './bundles/bundles.component';
import { AccordionModule, TabViewModule, MenuModule, MenubarModule,DataTableModule,SharedModule } from 'primeng/primeng';
import { AppRoutingModule }     from './app-routing.module';
import { ServicesComponent } from './services/services.component';
import { BundlesFilterPipe } from './bundles-filter.pipe';
import { BundleStatePipe } from './bundle-state.pipe';

import { HttpModule } from '@angular/http';

/*import { routing, appRoutingProviders }  from './app.routing';
import {BundlesFilter} from './pipes/bundlesFilter.pipe';*/
import { AppGlobalsService } from './app-globals.service';
import { BackendService } from './services/backend/backend.service';
import { ConfigService } from './config-service.service';
//import { ConfigComponent } from './config/config.component';
//import { ErrorsComponent } from './alerts/errors/errors.component';*/

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BundlesComponent,
    ServicesComponent,
    BundlesFilterPipe,
    BundleStatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AccordionModule,
    TabViewModule,
    MenuModule,
    MenubarModule,
    DataTableModule,SharedModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [AppGlobalsService, BackendService, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
