import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {BasicReferencePage} from "../../basic.reference.page";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {ManagementPositionsFormComponent} from "./actions/management.positions.form/management.positions.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";

@Component({
  template: basicTemplate(),
})
export class ManagmentPositionsComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {field: 'code', maxWidth: 102, headerName: 'GENERAL.NUMBER'},
        {
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.MANAGEMENT_LEVELS),
            },
            colId: 'managementLevelId',
            field: 'managementLevel.nameUz', maxWidth: 132, headerName: 'GENERAL.LEVEL'},
        {field: 'nameUz', headerName: 'GENERAL.NAME'},
        {
            floatingFilterComponentParams: {
                type: 'status',
            },
            field: 'status', type: 'status', maxWidth: 132, headerName: 'GENERAL.STATUS'},
        {field: 'updatedAt', type: 'date', maxWidth: 204, headerName: 'GENERAL.UPDATED_AT'},
        {field: 'createdBy', maxWidth: 216, headerName: 'GENERAL.USER'},
    ];

    title='MENU.REFERENCE.GENERAL_GUIDES.MANAGEMENT_POSITIONS';
    request = new ReferenceListRequest(ReferenceApiUrls.MANAGMENT_POSITIONS);

    addUpdate(id = null) {
        FormModalComponent.showModal(ManagementPositionsFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
            if(res)
                this.reload();
        });
    }
  override filter: FilterFieldGroup = {
    code: new FilterField('GENERAL.NUMBER', 'input'),
    managementLevelId: new FilterField('GENERAL.LEVEL', 'autocomplete', new ReferenceDropDownRequest(ReferenceApiUrls.MANAGEMENT_LEVELS)),
    nameUz: new FilterField('GENERAL.NAME', 'input'),
    status: new FilterField('GENERAL.STATUS', 'status'),
  }
}
