import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {EefdFormComponent} from "./actions/eefd.form/eefd.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';

@Component({
  template: basicTemplate(),
})
export class EefdComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {
            field: 'id',
            headerName: 'GENERAL.NUMBER',
            flex: 1
        },
        {
            field: 'code',
            headerName: 'REFERENCE.GROUP_CODE',
            flex: 2
        },
        {
            field: 'nameUz',
            headerName: 'REFERENCE.GROUP_NAME',
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
        {

            floatingFilterComponentParams: {
                type: 'date',
            },
            field: 'createdAt',
            headerName: 'GENERAL.CREATED_AT',
            flex: 2,
            type: 'date'
        },
        {
            field: 'w',
            headerName: 'REFERENCE.WHO_CREATED',
            flex: 2,
        },
    ];

    title = 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.ENTERPRISES_EXCLUDED_FROM_DIFFERENTIATED_ACCOUNTING';
    request = new ReferenceListRequest(ReferenceApiUrls.EEFD);

    addUpdate(id = null) {
        FormModalComponent.showModal(EefdFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
  override filter: FilterFieldGroup = {
    code: new FilterField('REFERENCE.GROUP_CODE', 'input'),
    nameUz: new FilterField('REFERENCE.GROUP_NAME', 'input'),
    status: new FilterField('GENERAL.STATUS', 'status'),
  }
}
