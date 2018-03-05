import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BundlesComponent} from './components/bundles/bundles.component'
import { BundleComponent} from './components/bundle/bundle.component'
import { ServicesComponent}     from './components/services/services.component';

/*const routes: Routes = [
    { path: '', redirectTo: '/bundles', pathMatch: 'full' },
    { path: 'bundles',  component: BundlesComponent },
    { path: 'services', component: ServicesComponent }
];*/

const routes: Routes = [
    { path: '', component: BundlesComponent },
    { path: 'bundles',     component: BundlesComponent },
    { path: 'bundles/:id', component: BundleComponent },
    { path: 'services',    component: ServicesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,  { enableTracing: true, useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
