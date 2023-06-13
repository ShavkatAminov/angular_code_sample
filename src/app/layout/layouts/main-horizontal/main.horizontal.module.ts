import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FuseNavigationModule } from '@fuse/components/navigation';
import { FuseLoadingBarModule } from '@fuse/components/loading-bar';
import { SharedModule } from 'app/shared/shared.module';
import {MainHorizontalComponent} from "./main.horizontal.component";
import {BreadcrumbsModule} from "../../common/breadcrumbs/breadcrumbs.module";
import {TranslocoModule} from "@ngneat/transloco";
@NgModule({
    declarations: [
        MainHorizontalComponent,
    ],
    imports: [
        RouterModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        FuseLoadingBarModule,
        FuseNavigationModule,
        SharedModule,
        BreadcrumbsModule,
        TranslocoModule
    ],
    exports     : [
        MainHorizontalComponent,
    ]
})
export class MainHorizontalModule
{
}
