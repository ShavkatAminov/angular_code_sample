import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {
    HabitationDivisionsFormComponent
} from "./actions/habitation.divisions.form/habitation.divisions.form.component";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

@Component({
  template: basicTemplate(),
})
export class HabitationDivisionsComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {
            field: 'id',
            headerName: 'GENERAL.CODE',
            flex: 2
        },
        {
            field: 'nameUz',
            headerName: "GENERAL.NAME"
        },
        {
            field: 'status',
            headerName: 'GENERAL.STATUS',
            type: 'status',
            flex: 2
        },
    ];

    title = 'MENU.REFERENCE.STRUCTURAL_GUIDES.DIRECTORY_OF_HABITATION_DIVISIONS';
    request = new ReferenceListRequest(ReferenceApiUrls.HABITATION_DIVISIONS);

    addUpdate(id = null) {
        FormModalComponent.showModal(HabitationDivisionsFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
}
