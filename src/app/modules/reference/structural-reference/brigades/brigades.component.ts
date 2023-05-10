import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {BrigadesFormComponent} from "./actions/brigades.form/brigades.form.component";
import {BasicReferencePage} from "../../basic.reference.page";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

@Component({
    template: basicTemplate(),
})
export class BrigadesComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {
            field: 'code',
            headerName: 'GENERAL.CODE_BRIGADE',
            flex: 3
        },
        {
            field: 'nameUz',
            headerName: 'GENERAL.NAME_BRIGADE',
        },
        {
            field: 'byTypeId',
            headerName: 'GENERAL.TYPE',
            flex: 4
        },
        {
            field: '',
            headerName: 'GENERAL.DATE_OF_ACTIVATION',
            flex: 4,
            type: 'date',
            valueGetter: (params) => {
                return params.data && params.data.status ? params.data.updatedAt : "";
            }
        },
        {
            field: 'deActivationDate',
            headerName: 'GENERAL.DATE_OF_DEACTIVATION',
            flex: 4,
            type: 'date',
            valueGetter: (params) => {
                return params.data && !params.data.status ? params.data.updatedAt : "";
            }
        },
        {
            field: 'status',
            headerName: 'GENERAL.STATUS',
            type: 'status',
            flex: 3
        },
    ];

    title = 'MENU.REFERENCE.STRUCTURAL_GUIDES.BRIGADES_DIRECTORY';
    request = new ReferenceListRequest(ReferenceApiUrls.BRIGADES);

    addUpdate(id = null) {
        FormModalComponent.showModal(BrigadesFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
}
