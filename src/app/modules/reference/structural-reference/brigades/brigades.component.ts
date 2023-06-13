import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {BrigadesFormComponent} from "./actions/brigades.form/brigades.form.component";
import {BasicReferencePage} from "../../basic.reference.page";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";
import {
    AccountingSettlementLCDropDownRequest
} from "@app/modules/accounting-settlement-lc/basic/AccountingSettlementLCDropDownRequest";
import {AccountingSettlementLCApiUrls} from "@app/modules/accounting-settlement-lc/accountingSettlementLCApiUrls";
import {ReferenceDropDownRequest} from "@app/modules/reference/basic/ReferenceDropDownRequest";

@Component({
    template: basicTemplate(`
    <het-button [label]="'GENERAL.CHANGE_PROTOCOL'"></het-button>
    <het-select [options]="printOptions"  ></het-select>
    <het-datepicker></het-datepicker>
    <het-button [label]="'GENERAL.PRINT'"></het-button>
  `)
})
export class BrigadesComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [

        {
            field: 'code',
            headerName: 'GENERAL.CODE_BRIGADE',
            minWidth:100
        },
        {
            field: 'nameUz',
            headerName: 'GENERAL.NAME_BRIGADE',
            minWidth:150
        },
        {
            field: 'byType.nameUz',
            floatingFilterComponentParams: {
                type:'autocomplete',
                request:  new ReferenceDropDownRequest(ReferenceApiUrls.CONSUMER_TYPE),
            },
            colId:'byTypeId',
            headerName: 'ACCOUNTING_SETTLEMENT_LC.TYPE',
            minWidth:150
        },
        {
            field: '',
            headerName: 'GENERAL.DATE_OF_ACTIVATION',
            minWidth:150,
            type: 'date',
            valueGetter: (params) => {
                return params.data && params.data.status ? params.data.updatedAt : "";
            }
        },
        {
            field: 'deActivationDate',
            headerName: 'GENERAL.DATE_OF_DEACTIVATION',
            minWidth:150,
            type: 'date',
            valueGetter: (params) => {
                return params.data && !params.data.status ? params.data.updatedAt : "";
            }
        },
        {
            field: 'status',
            headerName: 'GENERAL.STATUS',
            type: 'status',
            minWidth:150
        },
    ];

    title = 'MENU.REFERENCE.STRUCTURAL_GUIDES.BRIGADES_DIRECTORY';
    request = new ReferenceListRequest(ReferenceApiUrls.BRIGADES);

    addUpdate(id = null) {
        FormModalComponent.showModal(BrigadesFormComponent, this.title, id, SizeModal.sm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
}
