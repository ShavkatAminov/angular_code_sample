import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {AophFormComponent} from "./actions/aoph.form/aoph.form.component";
import {BasicReferencePage} from "../../basic.reference.page";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';

@Component({
  template: basicTemplate(),
})
export class AophComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {
            field: 'code',
            headerName: 'GENERAL.CODE',
            flex:2,
        },
        {
            field: 'nameUz',
            headerName: 'REFERENCE.NAME_AOPH',
        },
        {
            floatingFilterComponentParams: {
                type: 'status',
            },
            field: 'status',
            headerName: 'GENERAL.STATUS',
            flex:3,
            type:"status"
        },
    ];

    title = 'MENU.REFERENCE.STRUCTURAL_GUIDES.TCHSJ';
    request = new ReferenceListRequest(ReferenceApiUrls.AOPH);

    addUpdate(id = null) {
        FormModalComponent.showModal(AophFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
  override filter: FilterFieldGroup = {
    nameUz: new FilterField('REFERENCE.NAME_AOPH', 'input'),
    code: new FilterField('GENERAL.CODE', 'input'),
    status: new FilterField('GENERAL.STATUS', 'status'),
  }
}
