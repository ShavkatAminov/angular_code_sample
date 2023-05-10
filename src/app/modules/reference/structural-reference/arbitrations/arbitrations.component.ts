import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {ArbitrationsFormComponent} from "./actions/arbitrations.form/arbitrations.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

@Component({
  template: basicTemplate(),
})
export class ArbitrationsComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {field: 'code', maxWidth: 204, headerName: 'REFERENCE.CODE_ARBITRATION'},
        {field: 'nameUz', headerName: 'REFERENCE.NAME_ARBITRATION'},
        {field: 'status',  maxWidth: 204, headerName: 'GENERAL.STATUS', type: 'status'},
    ];

    title = 'MENU.REFERENCE.STRUCTURAL_GUIDES.ARBITRATION';
    request = new ReferenceListRequest(ReferenceApiUrls.ARBITRATIONS);

    addUpdate(id = null) {
        FormModalComponent.showModal(ArbitrationsFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
            if(res)
                this.reload();
        });
    }
}
