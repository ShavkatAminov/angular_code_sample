import {Component, Input} from "@angular/core";

export interface IChartInfo {
    title:string,
    amount:number,
    text:string,
    currency?:string
    field:string
}


@Component({
    selector:'chart-information',
    templateUrl:"chart-information.component.html",
    styleUrls:['chart-information.component.scss']
})
export class ChartInformationComponent {
 @Input() isActive:boolean = false
 @Input() chartInfo:IChartInfo
 @Input() currency:string = ""
}