import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {BasicReferencePage} from '../../basic.reference.page';
import {
    InformationSystemsErrorCodesFormComponent
} from "./actions/information.systems.error.codes.form/information.systems.error.codes.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";


import {FilterField, FilterFieldGroup} from 'app/shared/helpers/filter/filter.component/filterField';
import {basicTemplate} from "../../basic/basicTemplate";

@Component({
    template: basicTemplate(),
})
export class InformationSystemsErrorCodesComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {
            flex: 2,
            field: 'code',
            headerName: 'GENERAL.CODE',
        },
        {
            field: 'nameUz',
            headerName: 'GENERAL.NAME',
        },
        {
            floatingFilterComponentParams: {
                type: 'status',
            },
            flex: 2,
            type: 'status',
            field: 'status',
            headerName: 'GENERAL.STATUS',
        },
        {
            floatingFilterComponentParams: {
                type: 'date',
            },
            flex: 3,
            type: 'date',
            field: 'createdAt',
            headerName: 'GENERAL.DATE_ACTIVE',
        },
        {
            floatingFilterComponentParams: {
                type: 'date',
            },
            flex: 3,
            type: 'date',
            field: 'deletedAt',
            headerName: 'GENERAL.DATE_PASSIVELY',
        },
    ];

    title = 'MENU.REFERENCE.CB_HANDBOOKS.INFORMATION_SYSTEM_ERROR_CODE';
    request = new ReferenceListRequest(ReferenceApiUrls.INFORMATION_SYSTEMS_ERROR_CODES);

    addUpdate(id = null) {
        FormModalComponent.showModal(InformationSystemsErrorCodesFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
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
