import {Component} from '@angular/core';
import {NavigationService} from "@app/core/navigation/navigation.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector       : 'error-404',
    templateUrl    : './error-403.component.html',
})
export class Error403Component
{
    constructor(private navigation: NavigationService,
                private _activatedRoute: ActivatedRoute,
                private router: Router) {}

    reload() {
        this.navigation.get().subscribe(res => {
            let navigateUrl = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/home'
            this.router.navigateByUrl(navigateUrl);
        })
    }
}
