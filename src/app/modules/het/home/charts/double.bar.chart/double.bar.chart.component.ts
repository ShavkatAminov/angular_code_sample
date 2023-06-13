import {Component, ViewChild} from "@angular/core";
import {
    ApexChart,
    ApexAxisChartSeries,
    ChartComponent,
    ApexDataLabels,
    ApexPlotOptions,
    ApexYAxis,
    ApexLegend,
    ApexGrid,
    ApexXAxis,
    ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    yaxis: ApexYAxis;
    xaxis: ApexXAxis;
    grid: ApexGrid;
    colors: string[];
    legend: ApexLegend;
    tooltip: ApexTooltip;
};

@Component({
    selector: 'double-bar-chart',
    templateUrl: './double.bar.chart.component.html',
    styleUrls: ['./double.bar.chart.component.css']
})
export class DoubleBarChartComponent {
    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    data: [512760, 723214]
                }
            ],
            chart: {
                height: 125,
                type: "bar",
                zoom: {
                    enabled: false
                },
            },
            colors: [
                "rgba(0, 94, 255, 0.3)",
                "rgba(1, 224, 223, 0.3)"
            ],
            plotOptions: {
                bar: {
                    columnWidth: "95%",
                    distributed: true,
                    dataLabels: {
                        position: "top"
                    }
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    const numberString = val.toString();
                    let result = '';
                    for (let i = 0; i < numberString.length; i++) {
                        if (i > 0 && (numberString.length - i) % 3 === 0) {
                            result += ' ';
                        }
                        result += numberString.charAt(i);
                    }
                    return result;
                },
                offsetY: -20,
                style: {
                    fontSize: '12px',
                    fontWeight: 'normal',
                    colors: ["#ffffff"]
                }
            },
            legend: {
                show: false
            },
            grid: {
                show: false,
                padding: {
                    top: -5,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            },
            xaxis: {
                categories: [],
                labels: {
                    show: false
                },
                axisTicks: {
                    show: false
                }
            },
            yaxis: {
                show: false
            },
            tooltip: {
                enabled: false
            }
        };
    }
}
