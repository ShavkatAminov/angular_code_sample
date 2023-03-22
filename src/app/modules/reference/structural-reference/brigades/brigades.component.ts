import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {BrigadesFormComponent} from "./actions/brigades.form/brigades.form.component";
import {BasicReferencePage} from "../../basic.reference.page";
import {SizeModal} from "../../../../shared/helpers/modal/modal.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "../../../../shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';

@Component({
  template: basicTemplate(),
})
export class BrigadesComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {
            field: 'code',
            headerName: 'GENERAL.CODE',
            flex:3
        },
        {
            field: 'nameUz',
            headerName: 'GENERAL.NAME',
        },
        {
            floatingFilterComponentParams: {
                type: 'status',
            },
            field: 'status',
            headerName: 'GENERAL.STATUS',
            type:'status',
            flex: 3
        },
    ];

    title = 'MENU.REFERENCE.STRUCTURAL_GUIDES.BRIGADES_DIRECTORY';
    request = new ReferenceListRequest(ReferenceApiUrls.BRIGADES);

    addUpdate(id = null) {
        FormModalComponent.showModal(BrigadesFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
  override filter: FilterFieldGroup = {
    nameUz: new FilterField('GENERAL.NAME', 'input'),
    code: new FilterField('GENERAL.CODE', 'input'),
    status: new FilterField('GENERAL.STATUS', 'status'),
  }
}
