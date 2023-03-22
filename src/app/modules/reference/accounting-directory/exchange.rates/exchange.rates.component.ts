import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {BasicReferencePage} from "../../basic.reference.page";
import { SizeModal} from "@shared/helpers/modal/modal.component";
import {ExchangeRatesFormComponent} from "./actions/exchange.rates.form/exchange.rates.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';
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
            floatingFilterComponentParams: {
                type: 'date',
            },
            field: 'activationDate',
            headerName: 'GENERAL.ACTIVATION_DATE',
            type: 'date',
        },
        {
            field: 'updatedBy',
            headerName: 'GENERAL.UPDATED_BY',
        },
        {
            field: 'createdAt',
            headerName: 'GENERAL.CREATED_AT',
            type: 'date',
        },

        {
            floatingFilter: false,
            field: 'createdBy',
            headerName: 'GENERAL.CREATED_BY',
        },
        {
            floatingFilterComponentParams: {
                type: 'status',
            },
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

  override filter: FilterFieldGroup = {
    currencyId: new FilterField('GENERAL.CURRENCY_CODE', 'autocomplete', new ReferenceDropDownRequest(ReferenceApiUrls.CURRENCIES)),
    exchangeRate: new FilterField('GENERAL.EXCHANGE_RATE', 'input'),
    currencyUnit: new FilterField('GENERAL.CURRENCY_UNIT', 'input'),
    activationDate: new FilterField('GENERAL.ACTIVATION_DATE', 'date'),
    status: new FilterField('GENERAL.STATUS', 'status'),
  }
}
