import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";
import {
    TreasuryOrganizationalFormFormComponent
} from "./actions/treasury.organizational.form/treasury.organizational.form.form.component";
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";

@Component({
    template: basicTemplate(),
})
export class TreasuryOrganizationalFormComponent extends BasicReferencePage {
    ngOnInit(): void {
        this.defaultColumnDef['minWidth'] = 150
    }

    columnDefs: ColDef[] = [
        {
            field: 'code',
            headerName: 'GENERAL.CODE',
            pinned: 'left',
            maxWidth: 130
        },
        {
            field: 'nameUz',
            headerName: 'GENERAL.NAME',
            minWidth: 300,
            pinned: 'left'
        },
        {
            minWidth: 280,
            colId: 'stateGovernmentOrganizationId',
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.STATE_GOVERNMENT_ORGANIZATIONS),
            },
            type: 'code_nameUz',
            field: 'stateGovernmentOrganization',
            headerName: 'REFERENCE.GOVERNMENT_ORGANIZATION',
        },
        {
            field: 'updatedAt',
            headerName: 'GENERAL.UPDATED_AT',
            type: 'date',
            minWidth: 280
        },
        {
            type: 'user',
            field: 'updatedByName',
            colId: "updatedBy",
            headerName: 'GENERAL.UPDATED_BY',
            minWidth: 250
        },
        {
            field: 'createdAt',
            headerName: 'GENERAL.CREATED_AT',
            type: 'date',
            minWidth: 250
        },
        {
            type: 'user',
            field: 'createdByName',
            colId: 'createdBy',
            headerName: 'GENERAL.CREATED_BY',
            minWidth: 250
        },
        {
            field: 'status',
            headerName: 'GENERAL.STATUS',
            type: 'status',
            minWidth: 110
        },
    ];

    title = 'MENU.REFERENCE.NATIONAL_STATISTICS_HANDBOOKS.TREASURY_ORGANIZATIONAL';
    request = new ReferenceListRequest(ReferenceApiUrls.TREASURY_ORGANIZATIONAL);

    addUpdate(id = null) {
        FormModalComponent.showModal(TreasuryOrganizationalFormFormComponent, this.title, id, SizeModal.sm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
}
