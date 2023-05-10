import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {
    OwnershipClassifierFormComponent
} from "./actions/ownership.classifier.form/ownership.classifier.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {BasicTablePage} from "@shared/helpers/table/basic/basic.table.page";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {basicTemplate} from "../../basic/basicTemplate";
import {BasicReferencePage} from "@app/modules/reference/basic.reference.page";
;

@Component({
    template: basicTemplate(`
    <het-button [label]="'GENERAL.CHANGE_PROTOCOL'"></het-button>
    <het-select [options]="printOptions"  ></het-select>
    <het-button [label]="'GENERAL.PRINT'"></het-button>
  `),
})
export class OwnershipClassifierComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {
            flex: 2,
            headerName: "GENERAL.CODE",
            field: 'code',
        },
        {
            headerName: "REFERENCE.NAMING_OWNERSHIP_CLASSIFIER",
            field: 'nameUz',
        },
        {
            flex: 4,
            headerName: "GENERAL.STATUS",
            type: 'status',
            field: 'status',
        },
    ];

    title = 'MENU.REFERENCE.NATIONAL_STATISTICS_HANDBOOKS.OWNERSHIP_CLASSIFIER';
    request = new ReferenceListRequest(ReferenceApiUrls.OWNERSHIP_CLASSIFIER);

    addUpdate(id = null) {
        FormModalComponent.showModal(OwnershipClassifierFormComponent, this.title, id, SizeModal.sm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
}
