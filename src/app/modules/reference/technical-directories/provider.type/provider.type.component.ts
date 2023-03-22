import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "../../../../shared/helpers/modal/modal.component";
import {FormModalComponent} from "../../../../shared/helpers/form.modal/form.modal.component";
import {ProviderTypeFormComponent} from "./actions/provider.type.form/provider.type.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';

@Component({
  template: basicTemplate(),
})

export class ProviderTypeComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {
            field: 'id',
            headerName: 'GENERAL.NUMBER',
            flex: 5,
        },
        {
            field: 'code',
            headerName: 'GENERAL.CODE',
        },
        {
            flex: 20,
            field: 'nameUz',
            headerName: 'GENERAL.NAME_TYPE',
        },
        {
            flex: 20,
            field: 'url',
            headerName: 'GENERAL.URL',
        },
        {
            floatingFilterComponentParams: {
                type: 'status',
            },
            field: 'status',
            headerName: 'GENERAL.STATUS',
            type: 'status'
        },
        {
            floatingFilterComponentParams: {
                type: 'date',
            },
            field: 'updatedAt',
            headerName: 'GENERAL.UPDATED_AT',
            type: 'date',
        },
        {
            field: 'login',
            headerName: 'GENERAL.LOGIN',
        },
    ];

    title = 'MENU.REFERENCE.TECHNICAL_GUIDES.PROVIDER_TYPES_REFERENCE';
    request = new ReferenceListRequest(ReferenceApiUrls.PROVIDER_TYPE);

    addUpdate(id = null) {
        FormModalComponent.showModal(ProviderTypeFormComponent, this.title, id, SizeModal.sm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
  override filter: FilterFieldGroup = {
    code: new FilterField('GENERAL.CODE', 'input'),
    nameUz: new FilterField('GENERAL.NAME_TYPE', 'input'),
    url: new FilterField('GENERAL.URL', 'input'),
    status: new FilterField('GENERAL.STATUS', 'status'),
  }
}
