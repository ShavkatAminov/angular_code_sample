import {Component, ViewChild} from "@angular/core";
import {
    ApexAxisChartSeries,
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexXAxis,
    ApexPlotOptions,
    ApexStroke,
    ApexLegend,
    ApexGrid,
    ApexYAxis,
    ApexFill,
    ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    xaxis: ApexXAxis;
    stroke: ApexStroke;
    legend: ApexLegend;
    grid: ApexGrid;
    yaxis: ApexYAxis;
    fill: ApexFill;
    tooltip: ApexTooltip
};

@Component({
    selector: 'grouped-bar-chart',
    templateUrl: './grouped.bar.chart.component.html',
    styleUrls: ['./grouped.bar.chart.component.css']
})
export class GroupedBarChartComponent {
    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: 'За месяц',
                    data: [44, 55, 41]
                },
                {
                    name: 'За день',
                    data: [53, 32, 33]
                }
            ],
            chart: {
                type: "bar",
                height: 200,
                offsetY: -20
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    dataLabels: {
                        position: "top"
                    }
                }
            },
            dataLabels: {
                enabled: true,
                offsetX: -6,
                style: {
                    fontSize: "12px",
                    colors: ["#fff"]
                }
            },
            stroke: {
                show: false,
            },
            xaxis: {
                categories: ['Всего', 'Физ.л.', 'Юр.л.'],
                labels: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
            },
            legend: {
                show: false
            },
            grid: {
                show: false
            },
            yaxis: {
                labels: {
                    offsetX: 10,
                    style: {
                        colors: ['#00F7F2']
                    }
                }
            },
            fill: {
                colors: ['#005EFF']
            },
            tooltip: {
                enabled: false,
                fixed: {
                    enabled: true,
                    position: 'bottomRight'
                }
            }
        };
    }
}
