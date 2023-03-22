import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import { SizeModal} from "@shared/helpers/modal/modal.component";
import {CalculationTypeFormComponent} from "./actions/calculation.type.form/calculation.type.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';

@Component({
  template: basicTemplate(),
})
export class CalculationTypeComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {
            field: 'code',
            headerName: 'REFERENCE.SETTLEMENT_CODE',
            flex: 2
        },
        {
            field: 'nameUz',
            headerName: 'REFERENCE.NAME_CALCULATION_TYPE',
        },
        {
            floatingFilterComponentParams: {
                type: 'status',
            },
            field: 'status',
            headerName: 'GENERAL.STATUS',
            flex: 2,
            type: 'status'
        },
    ];

    title = 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.DIRECTORY_OF_CALCULATION_TYPES';
    request = new ReferenceListRequest(ReferenceApiUrls.CALCULATION_TYPE);

    addUpdate(id = null) {
        FormModalComponent.showModal(CalculationTypeFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
  override filter: FilterFieldGroup = {
    code: new FilterField('REFERENCE.SETTLEMENT_CODE', 'input'),
    nameUz: new FilterField('REFERENCE.NAME_CALCULATION_TYPE', 'input'),
    status: new FilterField('GENERAL.STATUS', 'status'),
  }
}
