import { Component, ViewEncapsulation } from '@angular/core';
import {BasicLayout} from "@app/layout/layouts/BasicLayout";

@Component({
    selector     : 'main-horizontal-layout',
    templateUrl  : 'main.horizontal.component.html',
    encapsulation: ViewEncapsulation.None
})
export class MainHorizontalComponent extends BasicLayout
{

}
