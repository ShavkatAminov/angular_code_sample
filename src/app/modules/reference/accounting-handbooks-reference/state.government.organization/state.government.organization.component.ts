import {Component, OnInit} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {
    StateGovernmentOrganizationsFormComponent
} from "./actions/state.government.organizations.form/state.government.organizations.form.component";
import {basicTemplate} from "../../basic/basicTemplate";
import {ReferenceDropDownRequest} from "@app/modules/reference/basic/ReferenceDropDownRequest";

@Component({
  template: basicTemplate(`
    <het-button [label]="'GENERAL.CHANGE_PROTOCOL'"></het-button>
    <het-select [options]="printOptions" ></het-select>
    <het-button [label]="'GENERAL.PRINT'"></het-button>
  `),
})
export class StateGovernmentOrganizationComponent extends BasicReferencePage implements OnInit {
    ngOnInit(): void {
        this.defaultColumnDef['minWidth'] = 150
    }

    columnDefs: ColDef[] = [
        {
            maxWidth: 140,
            headerName: "REFERENCE.CODE_GOVERNMENT_ORGANIZATION",
            field: 'code',
            pinned: 'left'
        },
        {
            minWidth: 400,
            headerName: "REFERENCE.NAME_GOVERNMENT_ORGANIZATION",
            field: 'nameUz',
            pinned: 'left'
        },
        {
            minWidth: 200,
            headerName: "REFERENCE.SHORT_NAME",
            field: 'shortName',
            pinned: 'left'
        },
        {
            minWidth: 150,
            headerName: "REFERENCE.PS9NUMBER",
            field: 'ps9Number',

        },
        {
            minWidth: 150,
            headerName: "REFERENCE.BUDGET_CODE",
            field: 'budgetCode',
        },
        {
            minWidth: 150,
            headerName: "REFERENCE.CODE_COMPLEX",
            field: 'stateComplex.code',
            colId: 'stateComplexId',
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.STATE_COMPLEX)
            },
        },
        {
            minWidth: 280,
            headerName: "REFERENCE.NAME_COMPLEX",
            filter:false,
            field: 'stateComplex.nameUz',
        },
        {
            minWidth: 150,
            headerName: "REFERENCE.MANAGING_ORGANIZATION_CODE",
            field: 'managingOrganizationCode',
        },
        {
            minWidth: 150,
            headerName: "GENERAL.STATUS",
            field: 'status',
            type: 'status'
        },
    ];

    title = 'MENU.REFERENCE.NATIONAL_STATISTICS_HANDBOOKS.STATE_GOVERNMENT_ORGANIZATIONS';
    request = new ReferenceListRequest(ReferenceApiUrls.STATE_GOVERNMENT_ORGANIZATIONS);

    addUpdate(id = null) {
        FormModalComponent.showModal(StateGovernmentOrganizationsFormComponent, this.title, id, SizeModal.sm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
}
