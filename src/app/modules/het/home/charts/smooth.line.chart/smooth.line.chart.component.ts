import {Component, ViewChild} from "@angular/core";

import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexDataLabels,
    ApexTitleSubtitle,
    ApexStroke,
    ApexGrid,
    ApexYAxis,
    ApexLegend,
    ApexFill,
    ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    dataLabels: ApexDataLabels;
    grid: ApexGrid;
    stroke: ApexStroke;
    title: ApexTitleSubtitle;
    legend: ApexLegend;
    fill: ApexFill;
    tooltip: ApexTooltip
};

@Component({
    selector: 'smooth-line-chart',
    templateUrl: './smooth.line.chart.component.html',
    styleUrls: ['./smooth.line.chart.component.css']
})
export class SmoothLineChartComponent {
    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Вкл.",
                    data: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2]
                },
                {
                    name: "Откл.",
                    data: [3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2]
                }
            ],
            chart: {
                height: 120,
                type: "line",
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "smooth",
                width: 2,
                colors: ['#00F7F2', '#FF4961']
            },
            title: {

            },
            grid: {
                show: false
            },
            xaxis: {
                categories: [
                    "ККР",
                    "Андижан",
                    "Бухара",
                    "Джиззах",
                    "Кашкадарья",
                    "Навоий",
                    "Наманган",
                    "Самарканд",
                    "Сурхандарья",
                    "Сырдарья",
                    "Фергана",
                    "Хорезм",
                    "Ташкент обл.",
                    "Тошкент г."
                ],
                labels: {
                    style: {
                        fontSize: '10px',
                        colors: ['#94A3B8','#94A3B8','#94A3B8','#94A3B8','#94A3B8','#94A3B8','#94A3B8','#94A3B8','#94A3B8','#94A3B8','#94A3B8','#94A3B8','#94A3B8','#94A3B8',]
                    }
                }
            },
            yaxis: {
                show: false
            },
            legend: {
                show: false
            },
            fill: {
                colors: ['#00F7F2', '#FF4961']
            },
            tooltip: {
                enabled: false
            }
        };
    }
}
