import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BundlesComponent } from './bundles/bundles.component';
import {AccordionModule, TabViewModule } from 'primeng/primeng';
import { AppRoutingModule }     from './app-routing.module';
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
    AccordionModule,
    TabViewModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
