import {Component, Input} from "@angular/core";

export interface IInfoCard {
    title:string,
    image:string,
    amount:number,
    field:string

}

@Component({
    selector:'dashboard-info-card',
    templateUrl:'info-card.component.html',
    styleUrls:['info-card.component.scss']
})
export class InfoCardComponent {
    @Input() isActive:boolean = false
    @Input() backgroundColor:string = ""
    @Input()  infoCardData:IInfoCard = {
        title:"",
        image:"",
        amount:0,
        field:""
    }
}