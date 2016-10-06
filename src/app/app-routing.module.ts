import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BundlesComponent } from './bundles/bundles.component';

const routes: Routes = [
    //{ path: 'framework',    component: FrameworkComponent },
    //{ path: 'bundles/:id/contents/:file',  component: CodeMirrorComponent },
    //{ path: 'bundles/:id/contents',  component: BundleContentComponent },
    //{ path: 'bundles/:id',  component: BundleComponent },
    { path: 'bundles',      component: BundlesComponent }//,
    //{ path: 'services',     component: ServicesComponent },
    //{ path: 'services/:id', component: ServiceComponent },
    //{ path: 'packages',     component: PackagesComponent },
    //{ path: 'packages/:id', component: PackageComponent },
    //{ path: 'logs',         component: LogsComponent },
    //{ path: 'snapshots',    component: SnapshotsComponent },
    //{ path: 'runtime',      component: RuntimeComponent },
    //{ path: 'config',       component: ConfigComponent },
    //{ path: 'help',         component: HelpComponent },
    //{ path: '**',           component: BundlesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class OsgiConsoleRoutingModule { }
