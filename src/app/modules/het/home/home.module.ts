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
import {SharedModule} from "@shared/shared.module";
import { WidgetsComponent } from './widgets/widgets.component';
import {TranslocoModule} from "@ngneat/transloco";
import {BarChartComponent} from "@app/modules/het/home/charts/bar-chart/bar-chart.component";
import {HorizontalBarChartComponent} from "@app/modules/het/home/charts/horizontal-bar-chart/horizontal-bar-chart.component";
import { DonutChartComponent } from './charts/donut-chart/donut-chart.component';
import {ChartInformationComponent} from "@app/modules/het/home/charts/chart-infomation/chart-information.component";
import {InfoCardComponent} from "@app/modules/het/home/components/info-card/info-card.component";
import { PolarAreaChartComponent } from './charts/polar.area.chart/polar.area.chart.component';
import { DoughnutChartComponent } from './charts/doughnut.chart/doughnut.chart.component';
import { DifferenceColumnChartComponent } from './charts/difference.column.chart/difference.column.chart.component';
import { SteplineChartComponent } from './charts/stepline.chart/stepline.chart.component';
import { DoubleBarChartComponent } from './charts/double.bar.chart/double.bar.chart.component';
import { SmoothLineChartComponent } from './charts/smooth.line.chart/smooth.line.chart.component';
import { GroupedBarChartComponent } from './charts/grouped.bar.chart/grouped.bar.chart.component';
import { RadialBarChartComponent } from './charts/radial.bar.chart/radial.bar.chart.component';
import { UzbekistanMapComponent } from './components/uzbekistan.map/uzbekistan.map.component';
import { MapMiniCardComponent } from './components/map.mini.card/map.mini.card.component';
import { MapStickComponent } from './components/map.stick/map.stick.component';


@NgModule({
  declarations: [
    HomeComponent,
    WidgetsComponent,
    BarChartComponent,
    HorizontalBarChartComponent,
    DonutChartComponent,
    ChartInformationComponent,
    InfoCardComponent,
    PolarAreaChartComponent,
    DoughnutChartComponent,
    DifferenceColumnChartComponent,
    SteplineChartComponent,
    DoubleBarChartComponent,
    SmoothLineChartComponent,
    GroupedBarChartComponent,
    RadialBarChartComponent,
    UzbekistanMapComponent,
    MapMiniCardComponent,
    MapStickComponent
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
    NgApexchartsModule

  ]
})
export class HomeModule { }
