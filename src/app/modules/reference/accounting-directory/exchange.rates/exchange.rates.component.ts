import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {BasicReferencePage} from "../../basic.reference.page";
import { SizeModal} from "@shared/helpers/modal/modal.component";
import {ExchangeRatesFormComponent} from "./actions/exchange.rates.form/exchange.rates.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";

@Component({
  template: basicTemplate(),
})
export class ExchangeRatesComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.CURRENCIES),
            },
            colId: 'currencyId',
            field: 'currency.code',
            headerName: 'GENERAL.CURRENCY_CODE',
        },
        {
            field: 'exchangeRate',
            headerName: 'GENERAL.EXCHANGE_RATE',
        },
        {
            field: 'currencyUnit',
            headerName: 'GENERAL.CURRENCY_UNIT',
        },
        {
            field: 'activationDate',
            headerName: 'GENERAL.ACTIVATION_DATE',
            type: 'date',
        },
        {
            field: 'updatedByName',
            type: 'user',
            headerName: 'GENERAL.UPDATED_BY',
        },
        {
            field: 'createdAt',
            headerName: 'GENERAL.CREATED_AT',
            type: 'date',
        },
        {
            type: 'user',
            field: 'createdByName',
            headerName: 'GENERAL.CREATED_BY',
        },
        {
            field: 'status',
            type: 'status',
            headerName: 'GENERAL.STATUS',
        }
    ];

    title = 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.EXCHANGE_RATE_GUID';

    request = new ReferenceListRequest(ReferenceApiUrls.EXCHANGE_RATES);

    addUpdate(id = null) {
        FormModalComponent.showModal(ExchangeRatesFormComponent, this.title, id, SizeModal.sm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
}
