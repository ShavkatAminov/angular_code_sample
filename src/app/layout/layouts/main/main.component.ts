import { Component, ViewEncapsulation } from '@angular/core';
import {FuseNavigationItem, FuseVerticalNavigationComponent} from '@fuse/components/navigation';
import {BasicLayout} from "@app/layout/layouts/BasicLayout";
import {mainMenuItems} from "@app/layout/layouts/main/menu.items";

@Component({
    selector     : 'main-layout',
    templateUrl  : 'main.component.html',
    encapsulation: ViewEncapsulation.None
})
export class MainLayoutComponent extends BasicLayout
{
    navigation: FuseNavigationItem[] = mainMenuItems;


    /**
     * Toggle navigation
     *
     * @param name
     */
    toggleNavigation(name: string): void
    {
        // Get the navigation
        const navigation = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(name);

        if ( navigation )
        {
            // Toggle the opened status
            navigation.toggle();
        }
    }
}
