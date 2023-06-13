import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {BankMfosFormComponent} from "./actions/bank.mfos.form/bank.mfos.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";

@Component({
    template: basicTemplate(`
    <het-button [label]="'GENERAL.CHANGE_PROTOCOL'"></het-button>
    <het-select [options]="printOptions" value="HTML" ></het-select>
    <het-button [label]="'GENERAL.PRINT'"></het-button>
  `),
})
export class BankMfosComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.REGIONS),
            },
            colId: 'regionCode',
            headerName: 'REFERENCE.AREA_CODE',
            field: 'region.code',
            flex: 5
        },
        {
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.BANKS),
            },
            colId: 'bankId',
            headerName: 'REFERENCE.BANK_CODE',
            field: 'bank.code',
            flex: 8
        },
        {
            headerName: 'REFERENCE.MFO',
            field: 'bankMfo',
            flex: 5
        },
        {
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.BANK_MFOS),
            },
            headerName: 'REFERENCE.NAME_BANK_THEIR_BRANCHES',
            field: 'nameUz',
            flex: 15
        },
        {
            headerName: 'GENERAL.STATUS',
            field: 'status',
            type: 'status',
            flex: 5
        },
    ];


    title = 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.DIRECTORY_OF_MFIS';
    request = new ReferenceListRequest(ReferenceApiUrls.BANK_MFOS);

    addUpdate(id = null) {
        FormModalComponent.showModal(BankMfosFormComponent, this.title, id, SizeModal.sm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
}
