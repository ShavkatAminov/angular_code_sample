import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "../../../../shared/helpers/modal/modal.component";
import {
    LegalFormClassifiersFormComponent
} from "./actions/legal.form.classifiers.form/legal.form.classifiers.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "../../../../shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup} from 'app/shared/helpers/filter/filter.component/filterField';

@Component({
    template: basicTemplate(),
})
export class LegalFormClassifiersComponent extends BasicReferencePage {
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
            field: 'status',
            type: 'status'
        },
    ];

    title = 'MENU.REFERENCE.NATIONAL_STATISTICS_HANDBOOKS.LEGAL_FORM_CLASSIFIERS';
    request = new ReferenceListRequest(ReferenceApiUrls.LEGAL_FORM_CLASSIFIERS);

    addUpdate(id = null) {
        FormModalComponent.showModal(LegalFormClassifiersFormComponent, this.title, id, SizeModal.sm).subscribe(res => {
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
