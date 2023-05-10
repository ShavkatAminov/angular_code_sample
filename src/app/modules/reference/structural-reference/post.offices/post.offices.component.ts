import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {BasicReferencePage} from "../../basic.reference.page";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {
    PostOfficeDirectoryFormComponent
} from "./actions/post.office.directory.form/post.office.directory.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

@Component({
    template: basicTemplate(),
})
export class PostOfficesComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {field: 'id', flex: 3, headerName: 'GENERAL.CODE'},
        {field: 'nameUz', headerName: 'GENERAL.NAME'},
        {field: 'address', flex: 5, headerName: 'GENERAL.ADDRESS'},
        {field: 'status', flex: 3, headerName: 'GENERAL.STATUS', type: 'status'},
    ];
    title = 'MENU.REFERENCE.STRUCTURAL_GUIDES.POST_OFFICE_DIRECTORY';
    request = new ReferenceListRequest(ReferenceApiUrls.POST_OFFICES);

    addUpdate(id = null) {
        FormModalComponent.showModal(PostOfficeDirectoryFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
}
