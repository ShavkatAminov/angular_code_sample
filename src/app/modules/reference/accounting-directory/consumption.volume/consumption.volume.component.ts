import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {ConsumptionVolumeFormComponent} from "./actions/consumption.volume.form/consumption.volume.form.component";
import {BasicReferencePage} from "../../basic.reference.page";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {basicTemplate} from "../../basic/basicTemplate";
import {RegistersDropDownRequest} from "../../../registers/basic/registersDropDownRequest";

;

@Component({
    template: basicTemplate(`
    <het-button [label]="'GENERAL.CHANGE_PROTOCOL'"></het-button>
    <het-select [options]="printOptions"  ></het-select>
    <het-button [label]="'GENERAL.PRINT'"></het-button>
  `),
})
export class ConsumptionVolumeComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {
            field: 'code',
            headerName: 'REFERENCE.WINDOW_CODE',
            pinned: 'left',
            maxWidth: 120,
        },
        {
            field: 'nameUz',
            headerName: 'REFERENCE.VOLUME_NAME',
            pinned: 'left',
            minWidth: 300,
        },
        {
            field: 'activationPeriod',
            type: 'date',
            headerName: 'REFERENCE.ACTIVATION_PERIOD'
        },
        {
            field: 'fromKWhInterval',
            headerName: 'REFERENCE.INTERVAL_WITH_KWH',
            minWidth: 150
        },
        {
            field: 'toKWhInterval',
            headerName: 'REFERENCE.KWH_INTERVAL',
            minWidth: 150
        },
        {
            field: 'tariff.code',
            headerName: 'REFERENCE.TARIFF_CODE',
            colId: 'tariffId',
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new RegistersDropDownRequest(ReferenceApiUrls.BASE_TARIFF_CODES),
            },
            minWidth: 150,
        },
        {
            field: 'price',
            headerName: 'REFERENCE.TARIFF_AMOUNT',
            minWidth: 150
        },
        {
            field: 'baseTariffId',
            headerName: 'REFERENCE.BASE_TARIFF',
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new RegistersDropDownRequest(ReferenceApiUrls.BASE_TARIFF_CODES),
            },
            minWidth: 150,
        },
        {
            field: 'createdAt',
            type: 'date',
            headerName: 'GENERAL.CREATED_AT'
        },
        {
            field: 'createdByName',
            headerName: 'GENERAL.CREATED_BY',
            colId: 'createdBy',
            type: 'user'
        },
        {
            field: 'updatedAt',
            type: 'date',
            headerName: 'GENERAL.UPDATED_AT'
        },
        {
            field: 'updatedByName',
            headerName: 'GENERAL.UPDATED_BY',
            type: 'user',
            colId: "updatedBy"
        },
        {
            field: 'status',
            type: 'status',
            headerName: 'GENERAL.STATUS',
            minWidth: 150,
        },
    ];


    title = 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.CONSUMPTION_VOLUMEK_WH';
    request = new ReferenceListRequest(ReferenceApiUrls.CONSUMPTION_VOLUME);

    addUpdate(id = null) {
        FormModalComponent.showModal(ConsumptionVolumeFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
}
