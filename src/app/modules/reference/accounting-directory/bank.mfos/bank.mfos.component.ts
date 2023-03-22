import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {BankMfosFormComponent} from "./actions/bank.mfos.form/bank.mfos.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup} from 'app/shared/helpers/filter/filter.component/filterField';
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";

@Component({
    template: basicTemplate(),
})
export class BankMfosComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.REGIONS),
            },
            headerName: 'REFERENCE.AREA_CODE',
            field: 'regionCode',
            flex: 3
        },
        {
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.BANKS),
            },
            colId: 'bankId',
            headerName: 'REFERENCE.BANK_CODE',
            field: 'bank.nameUz',
            flex: 3
        },
        {

            headerName: 'REFERENCE.MFO',
            field: 'bankMfo',
            flex: 2
        },
        {
            headerName: 'REFERENCE.NAME_BANK_THEIR_BRANCHES',
            field: 'bankName',
            flex: 15
        },
        {
            floatingFilterComponentParams: {
                type: 'status',
            },
            headerName: 'GENERAL.STATUS',
            field: 'status',
            type: 'status',
            flex: 3
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

    override filter: FilterFieldGroup = {
        bankId: new FilterField('REFERENCE.BANK_CODE', 'autocomplete', new ReferenceDropDownRequest(ReferenceApiUrls.BANKS)),
        regionCode: new FilterField('REFERENCE.AREA_CODE', 'autocomplete', new ReferenceDropDownRequest(ReferenceApiUrls.REGIONS)),
        bankMfo: new FilterField('REFERENCE.MFO', 'input'),
        name: new FilterField('GENERAL.NAME', 'input'),
        status: new FilterField('GENERAL.STATUS', 'status'),
    }
}
