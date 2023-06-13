import {Component, ViewChild} from "@angular/core";
import {ChartComponent} from "ng-apexcharts";

import {
    ApexNonAxisChartSeries,
    ApexResponsive,
    ApexChart,
    ApexTheme,
    ApexTitleSubtitle,
    ApexFill,
    ApexStroke,
    ApexYAxis,
    ApexLegend,
    ApexPlotOptions,
    ApexTooltip,
    ApexGrid,
    ApexXAxis,
    ApexDataLabels
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    responsive: ApexResponsive[];
    labels: any;
    theme: ApexTheme;
    title: ApexTitleSubtitle;
    fill: ApexFill,
    yaxis: ApexYAxis,
    stroke: ApexStroke,
    legend: ApexLegend,
    plotOptions: ApexPlotOptions,
    tooltip: ApexTooltip,
    grid: ApexGrid,
    xaxis: ApexXAxis,
    dataLabels: ApexDataLabels
};

@Component({
    selector: 'polar-area-chart',
    templateUrl: './polar.area.chart.component.html',
    styleUrls: ['./polar.area.chart.component.css']
})
export class PolarAreaChartComponent {
    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [42, 39, 35, 29],
            chart: {
                width: 380,
                height: 200,
                type: 'polarArea'
            },
            fill: {
                colors: ['#00F7F2', '#1CA6FE', '#3266FF', '#005EFF'],
                opacity: 1
            },
            stroke: {
                width: 0,
            },
            yaxis: {
                show: false,
            },
            legend: {
                show: false
            },
            plotOptions: {
                polarArea: {
                    rings: {
                        strokeWidth: 0
                    }
                }
            },
            theme: {
                monochrome: {
                    //    enabled: true,
                    shadeTo: 'light',
                    shadeIntensity: 0.6
                }
            },
            tooltip: {
                enabled: false
            },
            xaxis: {
                labels: {
                    show: false,
                }
            },
            dataLabels: {
                enabled: false,
                textAnchor: 'end',
                offsetX: -200,
                offsetY: -200,
                style: {
                    colors: ['#fff'],
                    fontWeight: 'normal'
                },
                background: {
                    enabled: false,
                }
            }
        };
    }
}
