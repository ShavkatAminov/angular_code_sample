import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {CurrenciesFormComponent} from "./actions/currencies.form/currencies.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';

@Component({
  template: basicTemplate(),
})
export class CurrenciesComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {
            field: 'code',
            headerName: 'GENERAL.CURRENCY_CODE',
            flex: 5

        },
        {
            field: 'symbol',
            headerName: 'REFERENCE.SYMBOL',
            flex: 5
        },
        {
            field: 'nameUz',
            headerName: 'REFERENCE.CURRENCY_NAME',
        },
        {
            field: 'scope',
            headerName: 'REFERENCE.SCALE',
            flex: 5
        },
        {
            field: 'scopeName',
            headerName: 'REFERENCE.SCALE_NAME',
        },
        {
            field: 'createdAt',
            headerName: 'GENERAL.CREATED_AT',
            type: 'date',
            flex: 5,
        },
        {
            field: 'createdBy',
            headerName: 'GENERAL.CREATED_BY',
            flex: 6
        },
        {
            field: 'updatedAt',
            headerName: 'GENERAL.UPDATED_AT',
            type: 'date',
            flex: 5,
        },
        {
            field: 'updatedBy',
            headerName: 'GENERAL.UPDATED_BY',
            flex: 6
        },
        {
            field: 'status',
            headerName: 'GENERAL.STATUS',
            flex: 5,
            type: 'status',
            floatingFilterComponentParams: {
                type: 'status',
            },
        },
    ];

    title = 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.CURRENCIES';
    request = new ReferenceListRequest(ReferenceApiUrls.CURRENCIES);

    addUpdate(id = null) {
        FormModalComponent.showModal(CurrenciesFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
  override filter: FilterFieldGroup = {
    code: new FilterField('GENERAL.CURRENCY_CODE', 'input'),
    symbol: new FilterField('REFERENCE.SYMBOL', 'input'),
    nameUz: new FilterField('REFERENCE.CURRENCY_NAME', 'input'),
    scope: new FilterField('REFERENCE.SCALE', 'input'),
    scopeName: new FilterField('REFERENCE.SCALE_NAME', 'input'),
    status: new FilterField('GENERAL.STATUS', 'status'),
  }
}
