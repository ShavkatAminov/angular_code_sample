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
  template: basicTemplate(`
    <het-button  [label]="'GENERAL.CHANGE_PROTOCOL'"></het-button>
    <het-button  [label]="'GENERAL.STORY'"></het-button>
    <het-select  [options]="printOptions"  ></het-select>
    <het-datepicker></het-datepicker>
    <het-button  [label]="'GENERAL.PRINT'"></het-button>
  `),
})
export class AgentComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {
            colId: "code",
            field: 'code',
            headerName:'REFERENCE.AGENT_CODE',
            minWidth:100
        },
        {
            colId: "fullName",
            minWidth: 250,
            headerName:'GENERAL.FULL_NAME',
            valueGetter: "data.firstName + ' ' + data.lastName + ' ' + data.middleName"
        },
        {
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.MANAGMENT_POSITIONS),
            },
            colId: 'positionId',
            field: 'position.nameUz',
            headerName:'REFERENCE.POSITION',
            minWidth: 150,
        },
        {
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.BRIGADES),
            },
            colId: 'brigadeId',
            field: 'brigade',
            type:'code_nameUz',
            headerName:'REFERENCE.BRIGADE',
            minWidth: 150,
        },
        {
            field: 'mobilePhone',
            headerName:'GENERAL.MOBILE_PHONE',
            minWidth: 150,
        },

        {
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.CONSUMER_TYPE),
            },
            colId: 'byTypeId',
            field: 'byType.nameUz',
            headerName:'REFERENCE.CONSUMER_TYPE',
            minWidth: 150,
        },

        {
            field: 'mobilePhone',
            minWidth: 150,
            headerName:'GENERAL.MOBILE_PHONE'
        },
        {
            field: 'createdAt',
            minWidth: 150,
            headerName:'GENERAL.DATE_OF_ACTIVATION',
            type:"date"
        },
        {
            field: 'deletedAt',
            minWidth: 150,
            headerName:'GENERAL.DATE_OF_DEACTIVATION',
            type:"date"
        },
        {
            field: 'status',
            headerName:'GENERAL.STATUS',
            type:"status",
            minWidth: 150,
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
