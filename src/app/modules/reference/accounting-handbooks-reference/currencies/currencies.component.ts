import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {CurrenciesFormComponent} from "./actions/currencies.form/currencies.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

@Component({
  template: basicTemplate(`
    <het-select [options]="printOptions"  ></het-select>
    <het-button [label]="'GENERAL.PRINT'"></het-button>
  `),
})
export class CurrenciesComponent extends BasicReferencePage {
    ngOnInit(): void {
        this.defaultColumnDef['minWidth'] = 150
    }
    columnDefs: ColDef[] = [
        {
            field: 'code',
            headerName: 'GENERAL.CURRENCY_CODE',
            pinned: "left",
            maxWidth: 150
        },
        {
            field: 'symbol',
            headerName: 'REFERENCE.SYMBOL',
            pinned: "left",
            maxWidth: 150
        },
        {
            field: 'nameUz',
            headerName: 'REFERENCE.CURRENCY_NAME',
        },
        {
            field: 'scope',
            headerName: 'REFERENCE.SCALE',
        },
        {
            field: 'scopeName',
            headerName: 'REFERENCE.SCALE_NAME',
            minWidth: 280
        },
        {
            field: 'createdAt',
            headerName: 'GENERAL.CREATED_AT',
            type: 'date',
        },
        {
            field: 'createdByName',
            colId: 'createdBy',
            headerName: 'GENERAL.CREATED_BY',
            minWidth: 280
        },
        {
            field: 'updatedAt',
            headerName: 'GENERAL.UPDATED_AT',
            type: 'date',
        },
        {
            type: 'user',
            field: 'updatedByName',
            colId: "updatedBy",
            headerName: 'GENERAL.UPDATED_BY',
        },
        {
            field: 'status',
            headerName: 'GENERAL.STATUS',
            type: 'status',
        },
    ];

    title = 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.CURRENCIES';
    request = new ReferenceListRequest(ReferenceApiUrls.CURRENCIES);

    addUpdate(id = null) {
        FormModalComponent.showModal(CurrenciesFormComponent, this.title, id, SizeModal.sm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
}
