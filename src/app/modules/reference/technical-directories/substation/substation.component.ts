import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {SubstationFormComponent} from "./actions/substation.form/substation.form.component";
import {ColDef} from "ag-grid-community";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";

@Component({
    template: basicTemplate(`
    <het-button [label]="'GENERAL.CHANGE_PROTOCOL'"></het-button>
    <het-select [options]="printOptions"  ></het-select>
    <het-button [label]="'GENERAL.PRINT'"></het-button>
  `),
})
export class SubstationComponent extends BasicReferencePage {
    title = 'MENU.REFERENCE.TECHNICAL_GUIDES.SUBSTATION_DIRECTORY';
    request = new ReferenceListRequest(ReferenceApiUrls.SUBSTATION)

    addUpdate(id = null) {
        FormModalComponent.showModal(SubstationFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
    columnDefs: ColDef[] = [
        {field: 'code', headerName: 'ACCOUNTING_SETTLEMENT_HC.SUBSTATION_CODE', width: 90},
        {field: 'nameUz', headerName: 'ACCOUNTING_SETTLEMENT_HC.SUBSTATION_NAME', width: 90},
        {field: 'transformerTypeId', headerName: 'ACCOUNTING_SETTLEMENT_HC.TRANSFORMER_CODE', width: 90},
        {
            colId: 'transformerTypeId',
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.TRANSFORMER_TYPES),
            },
            field: 'transformerType.nameUz', headerName: "ACCOUNTING_SETTLEMENT_HC.TRANSFORMER"
        },
        {
            colId: 'regionId',
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.REGIONS),
            },
            field: 'districts.regions', headerName: "GENERAL.TERRITORY",
            type:'code_nameUz'
        },
        {
            field: 'presenceOfMeter', type: 'yesNo', headerName: 'REFERENCE.PRESENCE_OF_METER'
        },
        {
            field: 'status', type: 'status', headerName: 'GENERAL.STATUS'
        },
    ];
}
