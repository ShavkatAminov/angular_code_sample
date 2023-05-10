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
            flex: 5
        },

        {
            minWidth: 200,
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.MANAGEMENT_LEVELS,
                    {
                        pageable: {
                            sort: ["code"],
                            direction: 'ASC'
                        }
                    }),
            },
            colId: 'managementLevelId',
            field: 'managementLevel.nameUz',
            headerName: 'GENERAL.LEVEL',
        },
        {
            minWidth: 200,
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
            field: 'mobilePhone',
            headerName: 'GENERAL.MOBILE_PHONE'
        },
        {
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
            type: 'user',
            field: 'createdByName',
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
}
