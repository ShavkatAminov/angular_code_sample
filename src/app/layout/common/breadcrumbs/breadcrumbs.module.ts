import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import {FuseNavigationModule} from "../../../../@fuse/components/navigation";
import {SharedModule} from "@shared/shared.module";



@NgModule({
  declarations: [
    BreadcrumbsComponent
  ],
  exports: [
    BreadcrumbsComponent
  ],
    imports: [
        CommonModule,
        FuseNavigationModule,
        SharedModule
    ]
})
export class BreadcrumbsModule { }
