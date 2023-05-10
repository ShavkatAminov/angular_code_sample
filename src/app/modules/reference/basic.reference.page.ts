import {Component} from "@angular/core";
import {BasicTablePage} from "@shared/helpers/table/basic/basic.table.page";
import {printOptions} from "@app/modules/reference/basic/printOptions";



@Component({
    template: "",
})
export class BasicReferencePage extends BasicTablePage {
    printOptions = printOptions
}
