    import { NgModule }             from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { BundlesComponent}      from './bundles/bundles.component';
    import { ServicesComponent}     from './services/services.component';
     
    const routes: Routes = [
      { path: '', redirectTo: '/bundles', pathMatch: 'full' },
      { path: 'bundles',  component: BundlesComponent },
      { path: 'services', component: ServicesComponent }
    ];
     
    @NgModule({
      imports: [ RouterModule.forRoot(routes) ],
      exports: [ RouterModule ]
    })
    export class AppRoutingModule {}