import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ChartComponent} from "ng-apexcharts";
import {
    ApexNonAxisChartSeries,
    ApexResponsive,
    ApexChart,
    ApexDataLabels,
    ApexPlotOptions,
    ApexFill,
    ApexStroke,
    ApexTooltip,
    ApexStates,
    ApexLegend,
    ApexAnnotations
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    responsive: ApexResponsive[];
    labels: any;
    events: any;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    fill: ApexFill;
    stroke: ApexStroke;
    tooltip: ApexTooltip;
    states: ApexStates;
    legend: ApexLegend;
    annotations: ApexAnnotations
};

@Component({
    selector: 'doughnut-chart',
    templateUrl: './doughnut.chart.component.html',
    styleUrls: ['./doughnut.chart.component.css']
})
export class DoughnutChartComponent implements OnInit {
    @ViewChild("chart") chart: ChartComponent;
    @Input() chartLabel: string = '';
    public chartOptions: Partial<ChartOptions>;

    ngOnInit() {
        this.chartOptions = {
            series: [28, 72],
            labels: ['Юр.лицо', 'Физ.лицо'],
            chart: {
                type: "donut",
                height: '155px',
                width: '155px'
            },
            fill: {
                colors: ['#50ABFF', '#005EFF'],
            },
            dataLabels: {
                enabled: false,
            },
            plotOptions: {
                pie: {
                    expandOnClick: false,
                    donut: {
                        size: '65%',
                        labels: {
                            show: true,
                            value: {
                                show: false,
                            },
                            total: {
                                show: true,
                                showAlways: true,
                                label: this.chartLabel,
                                fontSize: '14px',
                                fontFamily: 'Poppins',
                                color: '#94A3B8',
                            },
                        },
                    }
                }
            },
            stroke: {
                width: 0
            },
            tooltip: {
                enabled: false
            },
            states: {
                hover: {
                    filter: {
                        type: 'none',
                    }
                },
            },
            legend: {
                show: false,
            },
        }
    }
}
