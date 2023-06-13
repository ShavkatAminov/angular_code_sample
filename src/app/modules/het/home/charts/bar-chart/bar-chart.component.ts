import {AfterViewInit, Component, Input, ViewChild} from "@angular/core";
import {
    ApexAxisChartSeries,
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexPlotOptions,
    ApexYAxis,
    ApexAnnotations,
    ApexFill,
    ApexStroke,
    ApexGrid
} from "ng-apexcharts";
import {computerType} from "@app/modules/user-management/computers.register/computer.register.type";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    yaxis: ApexYAxis;
    xaxis: any; //ApexXAxis;
    annotations: ApexAnnotations;
    fill: ApexFill;
    stroke: ApexStroke;
    grid: ApexGrid;
};


@Component({
    selector:'barChart',
    templateUrl: "bar-chart.component.html",
    styleUrls:['bar-chart.component.scss']

})
export class BarChartComponent implements AfterViewInit{
    @ViewChild("chart") chart: ChartComponent;
    @Input() chartType: "bar" | "line" = "bar"
    @Input() chartColor = ""
    @Input() charTypeColor:'solid'|'gradient' = 'solid'
    @Input() chartTitle  = ""
    @Input() set chartData (value:number[]) {
        setTimeout(() =>  {
            this.chart.updateSeries([
                {
                    name:"",
                    data:value
                }
            ])
        },100)

    }

    get chartData () {
        return this.chartData
    }
    @Input() gradientColors
    public chartOptions: Partial<ChartOptions>;

    selectOption = computerType

    ngAfterViewInit() {
        this.chartOptions = {
            series: [
                {
                    name: "",
                    data:[]
                }
            ],

            chart: {
                height: 350,
                stacked: true,
                type: this.chartType
            },
            plotOptions: {
                bar: {
                    columnWidth: "25%",
                }
            },
            fill:{
                type:this.charTypeColor,
                gradient:{
                    type: "vertical",
                    gradientToColors: this.gradientColors, // optional, if not defined - uses the shades of same color in series
                    inverseColors:true,

                },
                colors:[this.chartColor]
            },
            dataLabels: {
                enabled: false
            },

            grid: {
                row: {
                    colors: ["#fff", "#f2f2f2"]
                }
            },
            yaxis:{
                labels :{
                    formatter(val: number, opts?: any) {
                        return val.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
                    }
                }
            },
            xaxis: {
                labels: {
                    rotate: -45
                },
                categories: [
                    "Янв",
                    "Фев",
                    "Март",
                    "Апр",
                    "Май",
                    "Июнь",
                    "Июль",
                    "Авг",
                    "Сен",
                    "Окт",
                    "Ноя",
                    "Дек",
                ],

            },

        };
    }


    constructor() {
        this.chartOptions = {
            series: [

                {
                    name: "",
                    data: []
                }
            ],
            annotations: {
                points: [

                ]
            },
            chart: {
                height: 350,
                type: this.chartType
            },
            plotOptions: {
                bar: {
                    columnWidth: "51%",

                }
            },
            fill:{
                colors:['#f00']
            },
            dataLabels: {
                enabled: false
            },

            grid: {
                row: {
                    colors: ["#fff", "#f2f2f2"]
                }
            },
            xaxis: {
                labels: {
                    rotate: -45
                },
                categories: [
                    "Янв",
                    "Фев",
                    "Март",
                    "Апр",
                    "Май",
                    "Июнь",
                    "Июль",
                    "Авг",
                    "Сен",
                    "Окт",
                    "Ноя",
                    "Дек",
                ],

            },

        };
    }
}
