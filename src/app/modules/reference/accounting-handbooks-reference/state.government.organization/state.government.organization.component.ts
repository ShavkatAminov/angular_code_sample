import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "../../../../shared/helpers/form.modal/form.modal.component";
import {SizeModal} from "../../../../shared/helpers/modal/modal.component";
import {
    StateGovernmentOrganizationsFormComponent
} from "./actions/state.government.organizations.form/state.government.organizations.form.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";

@Component({
  template: basicTemplate(),
})
export class StateGovernmentOrganizationComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {
            flex:3,
            headerName: "REFERENCE.CODE_GOVERNMENT_ORGANIZATION",
            field: 'code',
        },
        {
            flex:15,
            headerName: "REFERENCE.NAME_GOVERNMENT_ORGANIZATION",
            field: 'nameUz',
        },
        {
            headerName: "REFERENCE.SHORT_NAME",
            field: 'shortName',
        },
        {
            flex:3,
            headerName: "REFERENCE.PS9NUMBER",
            field: 'ps9Number',
        },
        {
            flex:4,
            headerName: "REFERENCE.BUDGET_CODE",
            field: 'budgetCode',
        },
        {
            floatingFilter: false,
            filter: false,
            flex: 4,
            headerName: "REFERENCE.CODE_COMPLEX",
            field: 'stateComplex.code',
        },
        {
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.STATE_COMPLEX)
            },
            flex:13,
            headerName: "REFERENCE.NAME_COMPLEX",
            field: 'stateComplex.nameUz',
        },
        {
            flex:5,
            headerName: "REFERENCE.MANAGING_ORGANIZATION_CODE",
            field: 'managingOrganizationCode',
        },
        {
            floatingFilterComponentParams: {
                type: 'status',
            },
            flex:5,
            headerName: "GENERAL.STATUS",
            field: 'status',
            type: 'status'
        },
    ];

    title = 'MENU.REFERENCE.NATIONAL_STATISTICS_HANDBOOKS.STATE_GOVERNMENT_ORGANIZATIONS';
    request = new ReferenceListRequest(ReferenceApiUrls.STATE_GOVERNMENT_ORGANIZATIONS);

    addUpdate(id = null) {
        FormModalComponent.showModal(StateGovernmentOrganizationsFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
  override filter: FilterFieldGroup = {
    nameUz: new FilterField('nameUz', 'input'),
    code: new FilterField('code', 'input'),
    status: new FilterField('status', 'status'),
    shortName: new FilterField('shortName', 'input'),
    ps9Number: new FilterField('ps9Number', 'input'),
    budgetCode: new FilterField('budgetCode', 'input'),
    stateComplexId: new FilterField('', 'input'),
    managingOrganizationCode: new FilterField('managingOrganizationCode', 'input'),
  }
}
