import {Component, OnInit} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {ManagersFormComponent} from "./actions/managers.form/managers.form.component";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";

@Component({
  template: basicTemplate(),
})
export class ManagersComponent extends BasicReferencePage implements OnInit {
    ngOnInit(): void {
        this.defaultColumnDef["minWidth"] = 150;
    }
    columnDefs: ColDef[] = [
        {
            field: 'id',
            headerName: 'GENERAL.NUMBER',
            maxWidth: 100,
            pinned: 'left'
        },
        {
            minWidth: 160,
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.MANAGEMENT_LEVELS),
            },
            colId: 'managementLevelId',
            field: 'managementLevel.nameUz',
            headerName: 'GENERAL.LEVEL',
            pinned: 'left'
        },
        {
            minWidth: 300,
            field: 'firstName',
            headerName: 'GENERAL.F_I_O',
            valueFormatter: function ({data}) {
                if (data){
                    return `${data.firstName} ${data.lastName} ${data.middleName}`
                }
            },
            pinned: 'left'
        },
        {
            minWidth: 200,
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.MANAGEMENT_TYPES),
            },
            colId: 'managementTypeId',
            field: 'managementType.nameUz',
            headerName: 'GENERAL.TYPE',
        },
        {
            type: 'user',
            field: 'createdByName',
            colId: 'createdBy',
            headerName: 'GENERAL.USER',
        },
        {
            field: 'mobilePhone',
            headerName: 'GENERAL.MOBILE_PHONE'
        },
        {
            flex: 5,
            field: 'updatedAt',
            headerName: 'GENERAL.UPDATED_AT',
            type: 'date',
            minWidth: 280
        },
        {
            field: 'status',
            headerName: 'GENERAL.STATUS',
            type: 'status'
        },
    ];

    title = 'MENU.REFERENCE.GENERAL_GUIDES.MANAGEMENT_DIRECTORY';
    request = new ReferenceListRequest(ReferenceApiUrls.MANAGERS);

    addUpdate(id = null) {
        FormModalComponent.showModal(ManagersFormComponent, this.title, id, SizeModal.sm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
}
