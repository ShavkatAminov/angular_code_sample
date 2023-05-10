import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {SubstationFormComponent} from "./actions/substation.form/substation.form.component";
import {ColDef} from "ag-grid-community";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";
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
            field: 'presenceOfMeter', type: 'yesNo', headerName: 'REFERENCE.PRESENCE_OF_METER'
        },
        {
            field: 'status', type: 'status', headerName: 'GENERAL.STATUS'
        },
    ];
}
