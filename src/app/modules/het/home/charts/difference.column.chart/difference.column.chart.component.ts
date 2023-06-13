import {Component, ViewChild} from "@angular/core";
import {
    ApexAxisChartSeries,
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexPlotOptions,
    ApexYAxis,
    ApexLegend,
    ApexStroke,
    ApexXAxis,
    ApexFill,
    ApexTooltip,
    ApexGrid,

} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    yaxis: ApexYAxis;
    xaxis: ApexXAxis;
    fill: ApexFill;
    tooltip: ApexTooltip;
    stroke: ApexStroke;
    legend: ApexLegend;
    grid: ApexGrid;

};

@Component({
    selector: 'difference-column-chart',
    templateUrl: './difference.column.chart.component.html',
    styleUrls: ['./difference.column.chart.component.css']
})
export class DifferenceColumnChartComponent {
    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
                    color: '#1CA6FE'
                },
                {
                    data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
                    color: '#00F7F2'
                }
            ],
            chart: {
                type: "bar",
                height: 90,
                width: '100%',
                zoom: {
                    enabled: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "30%"
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ["transparent"]
            },
            xaxis: {
                categories: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
                tickAmount: 12, // установка количества меток на оси X
                tickPlacement: 'start',
                labels: {
                  offsetY: -7,
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
            yaxis: {
                show: false
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                enabled: false
            },
            legend: {
                show: false
            },
            grid: {
                show: false
            },
        };
    }
}
