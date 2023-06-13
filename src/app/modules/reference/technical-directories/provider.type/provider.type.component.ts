import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {ProviderTypeFormComponent} from "./actions/provider.type.form/provider.type.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {basicTemplate} from "../../basic/basicTemplate";

@Component({
    template: basicTemplate(),
})
export class ProviderTypeComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {
            field: 'id',
            headerName: 'GENERAL.NUMBER',
            flex: 7,
        },

        {
            flex: 20,
            field: 'nameUz',
            headerName: 'GENERAL.NAME_TYPE',
        },
        {
            flex: 20,
            field: 'url',
            headerName: 'GENERAL.URL',
        },
        {
            field: 'status',
            headerName: 'GENERAL.STATUS',
            type: 'status'
        },
        {
            field: 'updatedAt',
            headerName: 'GENERAL.UPDATED_AT',
            type: 'date',
        },
        {
            field: 'updatedByName',
            headerName: 'GENERAL.LOGIN',
            flex: 3, type: 'user',
            colId: "updatedBy"
        },
    ];

    title = 'MENU.REFERENCE.TECHNICAL_GUIDES.PROVIDER_TYPES_REFERENCE';
    request = new ReferenceListRequest(ReferenceApiUrls.PROVIDER_TYPE);

    addUpdate(id = null) {
        FormModalComponent.showModal(ProviderTypeFormComponent, this.title, id, SizeModal.sm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
}
