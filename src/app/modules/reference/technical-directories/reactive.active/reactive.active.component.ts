import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "../../../../shared/helpers/modal/modal.component";
import {ReactiveActiveFormComponent} from "./actions/reactive.active.form/reactive.active.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "../../../../shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';

@Component({
  template: basicTemplate(),
})
export class ReactiveActiveComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {
            field: 'cosF',
            headerName: 'REFERENCE.COS_F',
            flex: 7,
            minWidth: 150,
        },
        {
            field: 'f',
            headerName: 'REFERENCE.F',
            flex: 7,
            minWidth: 150
        },
        {
            field: 'tgF',
            headerName: 'REFERENCE.TG_F',
            flex: 7,
            minWidth: 150
        },
        {
            field: 'reactive',
            headerName: 'REFERENCE.REACTIVE',
            flex: 14,
            minWidth: 150,
        },
        {
            field: 'fullReactive',
            headerName: 'REFERENCE.FULL_REACTIVE',
            flex: 14,
            minWidth: 150,
        },
        {
            field: 'coefficient',
            headerName: 'REFERENCE.COEFFICIENT',
            flex: 13,
            minWidth: 150,
        },
        {
            field: 'createdAt',
            headerName: 'GENERAL.CREATED_AT',
            type: 'date',
            flex: 12,
            minWidth: 150,
        },
        {
            field: 'createdBy',
            headerName: 'GENERAL.CREATED_BY',
            flex: 10,
            minWidth: 150,
        },
        {
            field: 'updatedAt',
            headerName: 'GENERAL.UPDATED_AT',
            type: 'date',
            flex: 12,
            minWidth: 150,
        },
        {
            field: 'updatedBy',
            headerName: 'GENERAL.UPDATED_BY',
            flex: 10,
            minWidth: 150,
        },
        {
            floatingFilterComponentParams: {
                type: 'status',
            },
            field: 'status',
            headerName: 'GENERAL.STATUS',
            type: 'status',
            minWidth: 150
        },

    ];

    title = 'MENU.REFERENCE.TECHNICAL_GUIDES.REFERENCE_BOOK_OF_REACTIVE_E/E_RATIOS_AT_CONSTANT_AK';
    request = new ReferenceListRequest(ReferenceApiUrls.REACTIVE_ACTIVE);

    addUpdate(id = null) {
        FormModalComponent.showModal(ReactiveActiveFormComponent, this.title, id, SizeModal.sm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
  override filter: FilterFieldGroup = {
    cosF: new FilterField('REFERENCE.COS_F', 'input'),
    f: new FilterField('REFERENCE.F', 'input'),
    tgF: new FilterField('REFERENCE.TG_F', 'input'),
    reactive: new FilterField('REFERENCE.REACTIVE', 'input'),
    fullReactive: new FilterField('REFERENCE.FULL_REACTIVE', 'input'),
    coefficient: new FilterField('REFERENCE.COEFFICIENT', 'input'),
    status: new FilterField('GENERAL.STATUS', 'status'),
  }
}
