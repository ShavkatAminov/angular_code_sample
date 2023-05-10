import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {AgentsFormComponent} from "./actions/agents.form/agents.form.component";
import {BasicReferencePage} from "../../basic.reference.page";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";

@Component({
  template: basicTemplate(),
})
export class AgentComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {
            colId: "code",
            field: 'code',
            headerName:'REFERENCE.AGENT_CODE'
        },
        {
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.MANAGMENT_POSITIONS),
            },
            colId: 'positionId',
            field: 'position.nameUz',
            headerName:'REFERENCE.POSITION',
        },
        {
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.BRIGADES),
            },
            colId: 'brigadeId',
            field: 'brigade.nameUz',
            headerName:'REFERENCE.BRIGADE',
        },
        {
            colId: "fullName",
            headerName:'GENERAL.FULL_NAME',
            valueGetter: "data.firstName + ' ' + data.lastName + ' ' + data.middleName"
        },
        {
            field: 'mobilePhone',
            headerName:'GENERAL.MOBILE_PHONE'
        },
        {
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.CONSUMER_TYPE),
            },
            colId: 'byTypeId',
            field: 'byType.nameUz',
            headerName:'REFERENCE.CONSUMER_TYPE'
        },
        {
            field: 'status',
            headerName:'GENERAL.STATUS',
            type:"status"
        }
    ];

    title = 'MENU.REFERENCE.STRUCTURAL_GUIDES.AGENTS';
    request = new ReferenceListRequest(ReferenceApiUrls.AGENT);

    addUpdate(id = null) {
        FormModalComponent.showModal(AgentsFormComponent, this.title, id, SizeModal.sm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
}
