import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import {FuseNavigationModule} from "../../../../@fuse/components/navigation";



@NgModule({
  declarations: [
    BreadcrumbsComponent
  ],
  exports: [
    BreadcrumbsComponent
  ],
    imports: [
        CommonModule,
        FuseNavigationModule
    ]
})
export class BreadcrumbsModule { }
