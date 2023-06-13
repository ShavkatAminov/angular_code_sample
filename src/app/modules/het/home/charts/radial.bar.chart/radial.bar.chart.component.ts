import {Component, ViewChild} from "@angular/core";
import {ChartComponent} from "ng-apexcharts";

import {
    ApexNonAxisChartSeries,
    ApexPlotOptions,
    ApexChart,
    ApexFill,
    ApexDataLabels,
    ApexStroke
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    plotOptions: ApexPlotOptions;
    fill: ApexFill;
    dataLabels: ApexDataLabels;
    stroke: ApexStroke;
};

@Component({
    selector: 'radial-bar-chart',
    templateUrl: './radial.bar.chart.component.html',
    styleUrls: ['./radial.bar.chart.component.css']
})
export class RadialBarChartComponent {
    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [80, 65, 55],
            chart: {
                height: 200,
                type: "radialBar",
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        show: false
                    },
                    hollow: {
                        size: '30%',
                    },
                    track: {
                        strokeWidth: '100%',
                        background: '#2A3A5A',
                    }
                },

            },
            fill: {
                colors: ['#1CA6FE', '#28C76F', '#00F7F2'],

            },
            labels: ["Все потребители", "Физ. лица", "Юр. лица"],
            stroke: {
                lineCap: 'round'
            }
        };
    }
}
