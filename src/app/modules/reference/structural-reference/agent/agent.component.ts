import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {AgentsFormComponent} from "./actions/agents.form/agents.form.component";
import {BasicReferencePage} from "../../basic.reference.page";
import {SizeModal} from "../../../../shared/helpers/modal/modal.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "../../../../shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";
import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';
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
            filter: false,
            floatingFilter: false,
            colId: "3",
            headerName:'GENERAL.FULL_NAME',
            valueGetter: "data.firstName + ' ' + data.lastName + ' ' + data.middleName"
        },
        {
            field: 'mobilePhone',
            headerName:'GENERAL.MOBILE_PHONE'
        },
        {
            field: 'byType.nameUz',
            headerName:'REFERENCE.CONSUMER_TYPE'
        },
        {
            floatingFilterComponentParams: {
                type: 'status',
            },
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
  override filter: FilterFieldGroup = {
    code: new FilterField('REFERENCE.AGENT_CODE', 'input'),
    positionId: new FilterField('', 'input'),
    brigadeId: new FilterField('', 'input'),
    firstName: new FilterField('', 'input'),
    lastName: new FilterField('', 'input'),
    middleName: new FilterField('', 'input'),
    mobilePhone: new FilterField('GENERAL.MOBILE_PHONE', 'input'),
    byTypeId: new FilterField('', 'input'),
    status: new FilterField('GENERAL.STATUS', 'status'),
  }
}
