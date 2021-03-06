import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {Bundle} from '../domain/bundle';
import {AppglobalsService} from '../providers/appglobals.service';

@Pipe({
    name: 'bundlesFilter'
})
@Injectable()
export class BundlesFilter implements PipeTransform {

    constructor(private _appGlobals: AppglobalsService) { }

    transform(bundles: Bundle[], args: any[]): any {
        if (bundles == null) {
            this._appGlobals.setFilteredCount(0);
            return Bundle[0];
        }
        if (typeof args[0] == 'undefined') {
            this._appGlobals.setFilteredCount(bundles.length);
            return bundles.filter(bundle => true);
        }
        var filteredBundles = bundles.filter(bundle => bundle.symbolicName.indexOf(args.toString()) !== -1);
        this._appGlobals.setFilteredCount(filteredBundles.length);

        var theList: string[] = [];
        filteredBundles.forEach(bundle => {
            theList.push(bundle.id);
        });
        this._appGlobals.setBundleIdList(theList);

        return filteredBundles;
    }
}