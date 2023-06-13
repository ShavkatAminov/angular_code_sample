import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {Error403Component} from "@app/modules/admin/pages/error/error-403/error-403.component";
import {error403Routes} from "@app/modules/admin/pages/error/error-403/error-403.routing";
import {SharedModule} from "@shared/shared.module";

@NgModule({
    declarations: [
        Error403Component
    ],
    imports: [
        RouterModule.forChild(error403Routes),
        SharedModule
    ]
})
export class Error403Module
{
}
