import {Component, Input, ViewChild} from "@angular/core";
import {ApexPlotOptions, ChartComponent} from "ng-apexcharts";
import {
    ApexNonAxisChartSeries,
    ApexResponsive,
    ApexChart,
    ApexTitleSubtitle,
    ApexLegend,
    ApexDataLabels,
    ApexAnnotations
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    responsive: ApexResponsive[];
    labels: any;
    plotOptions: ApexPlotOptions;
    title: ApexTitleSubtitle;
    legend: ApexLegend;
    dataLabels: ApexDataLabels;
    annotations: ApexAnnotations;
    colors: string[];
};

@Component({
    selector: 'donut-chart',
    templateUrl: './donut-chart.component.html',
    styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent {
    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                860959,
                836357,
                731248,
                717695,
                694596,
                661644,
                600449,
                524686,
                434076,
                397018,
                375793,
                271587,
                247016,
                281347
            ],
            chart: {
                type: "donut",
                width: '100%',
                height: 450
            },
            labels: [
                "г.Тошкент",
                "Ташкент обл.",
                "ККР",
                "Андижан",
                "Фергана",
                "Кашкадарья",
                "Наманган",
                "Навоий",
                "Сырдарья",
                "Сурхандарья",
                "Самарканд",
                "Джиззах",
                "Бухара",
                "Хорезм",
            ],
            colors: [
                '#1E293B',
                '#4F5D70',
                '#005EFF',
                '#826AF9',
                '#0D9488',
                '#22C55E',
                '#FDE802',
                '#FF8131',
                '#FF9B9E',
                '#C7D2FE',
                '#50ABFF',
                '#F87171',
                '#BEE0FF',
                '#F59E0B',
            ],
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            total: {
                                label: 'по Республике',
                                show: true,
                                showAlways: true,
                                fontSize: '18px',
                                fontWeight: 600,
                                formatter: function (w) {
                                    return  w.globals.seriesTotals.reduce((acc, curr) => acc + curr ,0).toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')
                                }
                            },
                        }
                    }
                }
            },
            dataLabels: {
                dropShadow: {
                    enabled: false
                }
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: "100%"
                        }
                    }
                }
            ],
            legend: {
                position: 'bottom',
                fontSize: '14px',
            },
        };
    }
}
