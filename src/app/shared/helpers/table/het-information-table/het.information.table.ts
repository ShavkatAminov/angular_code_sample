import {Component, Input} from "@angular/core";





export interface IHetInformationTable  {
    label:string,
    value:string
}

@Component({
    selector:"het-information-table",
    templateUrl:"het.information.table.html"
})
export class HetInformationTable {
    @Input() tableField:IHetInformationTable[] = [{
        label:"",
        value:""
    }]


}
