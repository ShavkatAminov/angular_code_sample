import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {ConsumerStatesFormComponent} from "./actions/consumer.states.form/consumer.states.form.component";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

@Component({
    template: basicTemplate(),
})
export class ConsumerStatesComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {
            flex: 2,
            headerName: "GENERAL.CODE",
            field: 'code',
        },
        {
            headerName: "GENERAL.NAME",
            field: 'nameUz',
        },
        {
            flex: 4,
            headerName: "GENERAL.STATUS",
            field: 'status',
            type: 'status'
        },

    ];

    title = 'MENU.REFERENCE.TECHNICAL_GUIDES.CONSUMER_STATES';
    request = new ReferenceListRequest(ReferenceApiUrls.CONSUMER_STATES);

    addUpdate(id = null) {
        FormModalComponent.showModal(ConsumerStatesFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
}
