import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";
import {hetHomeRoutes} from "./home.routing";
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {MatTooltipModule} from "@angular/material/tooltip";
import {NgApexchartsModule} from "ng-apexcharts";
import {SharedModule} from "../../../shared/shared.module";
import { WidgetsComponent } from './widgets/widgets.component';
import {TranslocoModule} from "@ngneat/transloco";


@NgModule({
  declarations: [
    HomeComponent,
    WidgetsComponent,
  ],
  imports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
    NgApexchartsModule,
    SharedModule,
    RouterModule.forChild(hetHomeRoutes),
    CommonModule,
    TranslocoModule,
  ]
})
export class HomeModule { }