import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {TransformerTypesFormComponent} from "./actions/transformer.types.form/transformer.types.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";
import {OptionsObj} from "@shared/helpers/form/interfaces/options";
import {
    AccountingSettlementLCDropDownRequest
} from "@app/modules/accounting-settlement-lc/basic/AccountingSettlementLCDropDownRequest";
import {AccountingSettlementLCApiUrls} from "@app/modules/accounting-settlement-lc/accountingSettlementLCApiUrls";

@Component({
    template: basicTemplate(),
})
export class TransformerTypesComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {
            headerName: 'REFERENCE.TRANSFORMER_TYPE_CODE',
            field: 'id',
            flex: 8
        },
        {
            headerName: 'REFERENCE.PTES_REP_SIGN',
            floatingFilterComponentParams: {
                type: 'select',
                options: [{
                    id: 'P',
                    name: 'REFERENCE.PTES',
                }, {
                    id: 'R',
                    name: 'REFERENCE.REP',
                }]
            },
            field: 'ptesRepSign',
            flex: 6
        },
        {
            headerName: 'REFERENCE.TRANSFORMER_TYPE_NAME',
            field: 'nameUz',
        },
        {
            headerName: 'REFERENCE.WINDING_SIGN',
            field: 'windingSign',
        },
        {
            headerName: 'REFERENCE.RATED_POWER',
            field: 'ratedPower',
        },
        {
            headerName: 'GENERAL.STATUS',
            field: 'status',
            type: 'status',
            flex: 5
        },
    ];


    title = 'MENU.REFERENCE.TECHNICAL_GUIDES.DIRECTORY_OF_TRANSFORMER_TYPES';
    request = new ReferenceListRequest(ReferenceApiUrls.TRANSFORMER_TYPES);

    addUpdate(id = null) {
        FormModalComponent.showModal(TransformerTypesFormComponent, this.title, id, SizeModal.sm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
}
