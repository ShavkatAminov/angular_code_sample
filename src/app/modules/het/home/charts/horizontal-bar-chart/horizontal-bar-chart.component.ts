import {Component, Input, ViewChild} from "@angular/core";
import {
    ApexAxisChartSeries,
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexXAxis,
    ApexFill,
    ApexYAxis,
    ApexPlotOptions,
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    fill: ApexFill;
    colors: string[];
};

@Component({
    selector: 'horizontal-bar-chart',
    templateUrl: './horizontal-bar-chart.component.html',
    styleUrls: ['./horizontal-bar-chart.component.scss']
})
export class HorizontalBarChartComponent {
    @ViewChild("chart") chart: ChartComponent;
    @Input() chartData
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "",
                    data: [860959, 836357, 731248, 717695, 694596, 661644, 600449, 524686, 434076, 397018, 375793, 271587, 247016, 181347]
                }
            ],
            chart: {
                type: "bar",
                height: 500,
                width: '100%',
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    distributed: false,
                    dataLabels: {
                        position: "bottom"
                    }
                },
            },
            colors: ["#c7d2fe80"],
            dataLabels: {
                enabled: true,
                textAnchor: "start",
                style: {
                    colors: ['#000'],
                    fontWeight: '400',
                },
                formatter: function (val, opt) {
                    return opt.w.globals.labels[opt.dataPointIndex] + ": " + val;
                }
            },
            xaxis: {
                labels: {
                    show: false
                },
                categories: [
                    "Самарканд",
                    "Фергана",
                    "Ташкент обл.",
                    "г.Тошкент",
                    "Кашкадарья",
                    "Андижан",
                    "Наманган",
                    "Сурхандарья",
                    "Бухара",
                    "Хорезм",
                    "ККР",
                    "Джиззах",
                    "Навоий",
                    "Сырдарья",
                ]
            },
            yaxis: {
                labels: {
                    show: false
                }
            },
        };
    }
}