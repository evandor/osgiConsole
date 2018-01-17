import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BundlesComponent} from './components/bundles/bundles.component'
import { ServicesComponent}     from './components/services/services.component';

/*const routes: Routes = [
    { path: '', redirectTo: '/bundles', pathMatch: 'full' },
    { path: 'bundles',  component: BundlesComponent },
    { path: 'services', component: ServicesComponent }
];*/

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'bundles',  component: BundlesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
