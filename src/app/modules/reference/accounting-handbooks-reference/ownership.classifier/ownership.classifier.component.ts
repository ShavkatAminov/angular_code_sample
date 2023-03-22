import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {
    OwnershipClassifierFormComponent
} from "./actions/ownership.classifier.form/ownership.classifier.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {BasicTablePage} from "../../../../shared/helpers/table/basic/basic.table.page";
import {FormModalComponent} from "../../../../shared/helpers/form.modal/form.modal.component";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {SizeModal} from "../../../../shared/helpers/modal/modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup} from 'app/shared/helpers/filter/filter.component/filterField';

@Component({
    template: basicTemplate(),
})
export class OwnershipClassifierComponent extends BasicTablePage {
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

            floatingFilterComponentParams: {
                type: 'status',
            },
            flex: 4,
            headerName: "GENERAL.STATUS",
            type: 'status',
            field: 'status',
        },
    ];

    title = 'MENU.REFERENCE.NATIONAL_STATISTICS_HANDBOOKS.OWNERSHIP_CLASSIFIER';
    request = new ReferenceListRequest(ReferenceApiUrls.OWNERSHIP_CLASSIFIER);

    addUpdate(id = null) {
        FormModalComponent.showModal(OwnershipClassifierFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
            if (res)
                this.reload();
        });
    }

    override filter: FilterFieldGroup = {
        code: new FilterField('GENERAL.CODE', 'input'),
        nameUz: new FilterField('GENERAL.NAME', 'input'),
        status: new FilterField('GENERAL.STATUS', 'status'),
    }
}
