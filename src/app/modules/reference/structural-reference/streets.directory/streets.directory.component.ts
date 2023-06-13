import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {StreetsDirectoryFormComponent} from "./actions/streets.directory.form/streets.directory.form.component";
import {BasicReferencePage} from "../../basic.reference.page";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";

@Component({
    template: basicTemplate(),
})
export class StreetsDirectoryComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {field: 'id', flex: 3, headerName: 'GENERAL.CODE'},
        {field: 'nameUz', headerName: 'GENERAL.NAME'},

        {field: 'status', type: 'status', flex: 3, headerName: 'GENERAL.STATUS'},
    ];

    title = 'MENU.REFERENCE.STRUCTURAL_GUIDES.STREETS_DIRECTORY';
    request = new ReferenceListRequest(ReferenceApiUrls.STREETS_DIRECTORY);

    addUpdate(id = null) {
        FormModalComponent.showModal(StreetsDirectoryFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
}
