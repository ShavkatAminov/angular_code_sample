import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {ReactiveActiveFormComponent} from "./actions/reactive.active.form/reactive.active.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

@Component({
  template: basicTemplate(),
})
export class ReactiveActiveComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {
            field: 'cosF',
            headerName: 'REFERENCE.COS_F',
            flex: 7,
            minWidth: 150,
        },
        {
            field: 'f',
            headerName: 'REFERENCE.F',
            flex: 7,
            minWidth: 150
        },
        {
            field: 'tgF',
            headerName: 'REFERENCE.TG_F',
            flex: 7,
            minWidth: 150
        },
        {
            field: 'reactive',
            headerName: 'REFERENCE.REACTIVE_CURRENT',
            flex: 14,
            minWidth: 150,
        },
        {
            field: 'fullReactive',
            headerName: 'REFERENCE.FULL_REACTIVE',
            flex: 14,
            minWidth: 150,
        },
        {
            field: 'coefficient',
            headerName: 'REFERENCE.COEFFICIENT',
            flex: 13,
            minWidth: 150,
        },
        {
            field: 'createdAt',
            headerName: 'GENERAL.CREATED_AT',
            type: 'date',
            flex: 12,
        },
        {
            type: 'user',
            field: 'createdByName',
            headerName: 'GENERAL.CREATED_BY',
            flex: 10,
        },
        {
            field: 'updatedAt',
            headerName: 'GENERAL.UPDATED_AT',
            type: 'date',
            flex: 12,
        },
        {
            type: 'user',
            field: 'updatedByName',
            headerName: 'GENERAL.UPDATED_BY',
            flex: 10,
        },
        {
            field: 'status',
            headerName: 'GENERAL.STATUS',
            type: 'status',
            minWidth: 150
        },

    ];

    title = 'MENU.REFERENCE.TECHNICAL_GUIDES.REFERENCE_BOOK_OF_REACTIVE_E/E_RATIOS_AT_CONSTANT_AK';
    request = new ReferenceListRequest(ReferenceApiUrls.REACTIVE_ACTIVE);

    addUpdate(id = null) {
        FormModalComponent.showModal(ReactiveActiveFormComponent, this.title, id, SizeModal.sm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
}
