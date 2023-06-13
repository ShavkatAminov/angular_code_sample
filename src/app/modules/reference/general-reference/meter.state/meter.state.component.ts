import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {MeterStateFormComponent} from "@app/modules/reference/general-reference/meter.state/actions/meter.state.form/meter.state.form.component";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {BasicTablePage} from "@shared/helpers/table/basic/basic.table.page";
import {basicTemplate} from "@app/modules/reference/basic/basicTemplate";
import {translate} from "@ngneat/transloco";
import {OptionsObj} from "@shared/helpers/form/interfaces/options";

@Component({
    template: basicTemplate(),
})
export class MeterStateComponent extends BasicTablePage {

    optionsState: OptionsObj[] = [
        { id: null, name: ''},
        { id: true, name: "MENU.REFERENCE.GENERAL_GUIDES.USED" },
        { id: false, name: "MENU.REFERENCE.GENERAL_GUIDES.NOT_USED" }
    ]

    columnDefs: ColDef[] = [
        {
            flex: 2,
            field: 'code',
            headerName: 'GENERAL.CODE',
        },
        {
            field: 'nameUz',
            headerName: 'ACCOUNTING_SETTLEMENT_HC.COUNTER_STATUS',
        },
        {
            floatingFilterComponentParams: {
                type: 'select',
                options: this.optionsState
            },
            field: 'state',
            headerName: 'REFERENCE.DESCRIPTION_METER',
            valueGetter: params => {
                if (params.data?.state === true) {
                    return translate('MENU.REFERENCE.GENERAL_GUIDES.USED')
                } else {
                    return translate('MENU.REFERENCE.GENERAL_GUIDES.NOT_USED')
                }
            }
        },
        {
            flex: 3,
            field: 'status',
            headerName: 'GENERAL.STATUS',
            type: 'status',
        },
    ];

    title = 'MENU.REFERENCE.GENERAL_GUIDES.METER_STATE_REFERENCE';
    request = new ReferenceListRequest(ReferenceApiUrls.METER_STATE);

    addUpdate(id = null) {
        FormModalComponent.showModal(MeterStateFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
}
