import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {EefdFormComponent} from "./actions/eefd.form/eefd.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";
;

@Component({
  template: basicTemplate(`
    <het-button [label]="'GENERAL.CHANGE_PROTOCOL'"></het-button>
    <het-select [options]="printOptions"  ></het-select>
    <het-button [label]="'GENERAL.PRINT'"></het-button>
  `),
})
export class EefdComponent extends BasicReferencePage {
    ngOnInit(): void {
        this.defaultColumnDef['minWidth'] = 150
    }
    columnDefs: ColDef[] = [
        {
            field: 'id',
            headerName: 'GENERAL.NUMBER',
            flex: 1
        },
        {
            field: 'code',
            headerName: 'REFERENCE.GROUP_CODE',
            flex: 2
        },
        {
            field: 'nameUz',
            headerName: 'REFERENCE.GROUP_NAME',
        },
        {
            field: 'status',
            headerName: 'GENERAL.STATUS',
            flex: 2,
            type: 'status'
        },
        {
            field: 'createdAt',
            headerName: 'GENERAL.CREATED_AT',
            flex: 2,
            type: 'date'
        },
        {
            type: 'user',
            field: 'createdByName',
            colId: 'createdBy',
            headerName: 'GENERAL.CREATED_BY',
            flex: 2,
        },
    ];

    title = 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.ENTERPRISES_EXCLUDED_FROM_DIFFERENTIATED_ACCOUNTING';
    request = new ReferenceListRequest(ReferenceApiUrls.EEFD);

    addUpdate(id = null) {
        FormModalComponent.showModal(EefdFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
}
