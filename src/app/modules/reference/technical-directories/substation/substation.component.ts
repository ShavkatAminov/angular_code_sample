import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {SizeModal} from "@shared/helpers/modal/modal.component";

import {SubstationFormComponent} from "./actions/substation.form/substation.form.component";
import {ColDef} from "ag-grid-community";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup} from 'app/shared/helpers/filter/filter.component/filterField';
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";

@Component({
    template: basicTemplate(),
})
export class SubstationComponent extends BasicReferencePage {
    title = 'MENU.REFERENCE.TECHNICAL_GUIDES.SUBSTATION_DIRECTORY';
    request = new ReferenceListRequest(ReferenceApiUrls.SUBSTATION)

    addUpdate(id = null) {
        FormModalComponent.showModal(SubstationFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
            if (res)
                this.reload();
        });
    }

    columnDefs: ColDef[] = [
        {field: 'code', headerName: 'GENERAL.CODE', width: 90},
        {field: 'nameUz', headerName: 'GENERAL.NAME', width: 90},
        {
            colId: 'transformerTypeId',
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.TRANSFORMER_TYPES),
            },
            field: 'transformerType.nameUz', headerName: "REFERENCE.TRANSFORMER_TYPE_NAME"
        },
        {
            colId: 'districtId',
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.DISTRICTS),
            },
            field: 'districts.nameUz', headerName: "GENERAL.DISTRICT"
        },
        {
            floatingFilterComponentParams: {
                type: 'yesNo',
            },
            field: 'presenceOfMeter', type: 'yesNo', headerName: 'REFERENCE.PRESENCE_OF_METER'
        },
        {
            floatingFilterComponentParams: {
                type: 'status',
            },
            field: 'status', type: 'status', headerName: 'GENERAL.STATUS'
        },
    ];

    override filter: FilterFieldGroup = {
        nameUz: new FilterField('GENERAL.NAME', 'input'),
        code: new FilterField('GENERAL.CODE', 'input'),
        status: new FilterField('GENERAL.STATUS', 'status'),
        transformerTypeId: new FilterField('REFERENCE.TRANSFORMER_TYPE_NAME', 'autocomplete', new ReferenceDropDownRequest(ReferenceApiUrls.TRANSFORMER_TYPES)),
        districtId: new FilterField('GENERAL.DISTRICT', 'autocomplete', new ReferenceDropDownRequest(ReferenceApiUrls.DISTRICTS)),
        presenceOfMeter: new FilterField('REFERENCE.PRESENCE_OF_METER', 'yesNo'),
    }
}
