import {Component, ViewChild} from "@angular/core";

import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexStroke,
    ApexDataLabels,
    ApexTooltip,
    ApexGrid,
    ApexYAxis,
    ApexPlotOptions,
    ApexXAxis,
    ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    stroke: ApexStroke;
    dataLabels: ApexDataLabels;
    tooltip: ApexTooltip;
    grid: ApexGrid;
    yaxes: ApexYAxis;
    xaxis: ApexXAxis;
    plotOptions: ApexPlotOptions;
    legend: ApexLegend ;
};

@Component({
    selector: 'stepline-chart',
    templateUrl: './stepline.chart.component.html',
    styleUrls: ['./stepline.chart.component.css']
})
export class SteplineChartComponent {
    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "",
                    data: [1, 6, 9, 3, 4, 8, 6, 5, 7],
                    color: '#1CA6FE'
                },
                {
                    name: "stepline-series",
                    data: [9, 6, 3, 1, 8, 1, 2, 7, 5],
                    color: '#00F7F2'
                }
            ],
            chart: {
                type: "line",
                height: 100,
                zoom: {
                    enabled: false
                }
            },
            stroke: {
                curve: "stepline",
                width: 1
            },
            dataLabels: {
                enabled: false
            },
            tooltip: {
                enabled: false
            },
            grid: {
                show: false
            },
            yaxes: {
                show: false
            },
            xaxis: {
                categories: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
                labels: {
                    offsetY: -6,
                    style: {
                        colors: ['#94A3B8', '#94A3B8', '#94A3B8', '#94A3B8', '#94A3B8', '#94A3B8', '#94A3B8', '#94A3B8', '#94A3B8', '#94A3B8', '#94A3B8', '#94A3B8'],
                        fontSize: '10px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-xaxis-label',
                    }
                },
                axisTicks: {
                    show: false,
                },
            },
            plotOptions: {
                bar: {
                    columnWidth: '40%'
                }
            },
            legend: {
                show: false
            }
        };
    }
}
