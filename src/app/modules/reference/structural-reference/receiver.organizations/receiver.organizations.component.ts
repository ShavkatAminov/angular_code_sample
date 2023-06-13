import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {
    ReceiverOrganizationsFormComponent
} from "./actions/receiver.organizations.form/receiver.organizations.form.component";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";

@Component({
    template: basicTemplate(),
})
export class ReceiverOrganizationsComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {
            headerName: 'REFERENCE.SENDERS_CODE',
            field: 'code',
            maxWidth: 150
        },
        {
            colId: 'sendersTypeId',
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.SENDER_ORGANIZATION_TYPES),
            },
            headerName: 'REFERENCE.SENDERS_TYPE',
            field: 'senderOrganizationTypes.nameUz',
            maxWidth: 180
        },
        {
            colId: 'paymentSystemId',
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.PAYMENT_SYSTEM),
            },
            headerName: 'REFERENCE.PAYMENT_SYSTEM_TYPE',
            field: 'paymentSystem.nameUz',
            maxWidth: 200
        },
        {
            headerName: 'REFERENCE.SENDERS_NAME',
            field: 'nameUz',
        },
        {
            headerName: 'REFERENCE.MFO',
            field: 'mfo',
            maxWidth: 150
        },
        {
            headerName: 'REFERENCE.ACCOUNT',
            field: 'account',
            maxWidth: 150
        },
        {
            headerName: 'REFERENCE.PERCENTAGE',
            field: 'percentage',
            maxWidth: 120
        },
        {
            headerName: 'GENERAL.STATUS',
            field: 'status',
            type: 'status',
            maxWidth: 150
        },
    ];

    title = 'MENU.REFERENCE.STRUCTURAL_GUIDES.DIRECTORY_OF_ORGANIZATIONS_ACCEPTING_PAYMENTS';
    request = new ReferenceListRequest(ReferenceApiUrls.RECEIVER_ORGANIZATIONS);

    addUpdate(id = null) {
        FormModalComponent.showModal(ReceiverOrganizationsFormComponent, this.title, id, SizeModal.sm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
}
