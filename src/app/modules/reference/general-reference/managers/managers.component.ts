import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {ManagersFormComponent} from "./actions/managers.form/managers.form.component";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";

@Component({
  template: basicTemplate(),
})
export class ManagersComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {
            field: 'id',
            headerName: 'GENERAL.NUMBER',
            flex: 5
        },
        {
            field: 'code',
            headerName: 'GENERAL.CODE',
        },
        {
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.MANAGEMENT_LEVELS),
            },
            colId: 'managementLevelId',
            field: 'managementLevel.nameUz',
            headerName: 'GENERAL.LEVEL',
        },
        {
            field: 'firstName',
            headerName: 'GENERAL.F_I_O',
            valueFormatter: function ({data}) {
                if (data){
                    return `${data.firstName} ${data.lastName} ${data.middleName}`
                }
            },
            flex: 20
        },
        {
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.MANAGEMENT_TYPES),
            },
            colId: 'managementTypeId',
            field: 'managementType.nameUz',
            headerName: 'GENERAL.TYPE',
        },
        {
            field: 'mobilePhone',
            headerName: 'GENERAL.MOBILE_PHONE'
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
            field: 'updatedAt',
            headerName: 'GENERAL.UPDATED_AT',
            type: 'date'
        },
        {
            field: 'createdBy',
            headerName: 'GENERAL.USER',
        },
    ];

    title = 'MENU.REFERENCE.GENERAL_GUIDES.MANAGEMENT_DIRECTORY';
    request = new ReferenceListRequest(ReferenceApiUrls.MANAGERS);

    addUpdate(id = null) {
        FormModalComponent.showModal(ManagersFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
  override filter: FilterFieldGroup = {
    code: new FilterField('GENERAL.CODE', 'input'),
    firstName: new FilterField('GENERAL.FIRST_NAME', 'input'),
    lastName: new FilterField('GENERAL.LAST_NAME', 'input'),
    middleName: new FilterField('GENERAL.MIDDLE_NAME', 'input'),
    managementLevelId: new FilterField('GENERAL.LEVEL', 'autocomplete', new ReferenceDropDownRequest(ReferenceApiUrls.MANAGEMENT_LEVELS)),
    managementTypeId: new FilterField('GENERAL.TYPE', 'autocomplete', new ReferenceDropDownRequest(ReferenceApiUrls.MANAGEMENT_TYPES)),
    mobilePhone: new FilterField('GENERAL.MOBILE_PHONE', 'input'),
    status: new FilterField('GENERAL.STATUS', 'status'),
  }
}
