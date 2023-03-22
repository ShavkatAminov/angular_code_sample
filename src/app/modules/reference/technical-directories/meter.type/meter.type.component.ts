import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {BasicReferencePage} from '../../basic.reference.page';
import {MeterTypeFormComponent} from "./actions/meter.type.form/meter.type.form.component";
import {SizeModal} from "../../../../shared/helpers/modal/modal.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "../../../../shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup} from 'app/shared/helpers/filter/filter.component/filterField';
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";

@Component({
    template: basicTemplate(),
})
export class MeterTypeComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {
            headerName: 'REFERENCE.METER_TYPE_CODE',
            field: 'code',
        },
        {
            headerName: 'GENERAL.NAME',
            field: 'nameUz',
        },
        {
            floatingFilterComponentParams: {
                type: 'yesNo',
            },
            headerName: 'REFERENCE.TYPE_METER',
            field: 'measurementType',
            type: 'yesNo',
        },
        {
            headerName: 'REFERENCE.AVERAGE',
            field: 'average',
        },
        {
            headerName: 'REFERENCE.PHYSICAL_CONSUMER_AMOUNT',
            field: 'physicalConsumerAmount',
        },
        {
            headerName: 'REFERENCE.LEGAL_CONSUMER_AMOUNT',
            field: 'legalConsumerAmount',
        },
        {
            headerName: 'REFERENCE.ADMISSIBLE_AMPERE',
            field: 'admissibleCurrentAmper',
        },
        {
            headerName: 'REFERENCE.METER_CAPACITY',
            field: 'meterCapacity',
        },
        {
            headerName: 'REFERENCE.METER_VIEW',
            field: 'meterView',
        },
        {
            headerName: 'REFERENCE.COMPATIBILITY_WITH_ASKUE',
            field: 'askueCompatibility',
        },
        {
            floatingFilterComponentParams: {
                type: 'yesNo',
            },
            headerName: "REFERENCE.MULTI_TARIFF",
            type: 'yesNo',
            field: 'multiTariff',
        },
        {
            floatingFilterComponentParams: {
                type: 'status',
            },
            headerName: 'GENERAL.STATUS',
            type: 'status',
            field: 'status',
        },
        {
            floatingFilterComponentParams: {
                type: 'yesNo',
            },
            headerName: 'REFERENCE.REAL_METER',
            type: 'yesNo',
            field: 'realMeter',
        },
        {
            headerName: 'REFERENCE.TRANSFERRED',
            field: 'transferred',
        },
        {
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.METER_MANUFACTURER),
            },
            headerName: 'REFERENCE.METER_MANUFACTURER',
            field: 'meterManufacturer.nameUz',
        },
        {
            floatingFilterComponentParams: {
                type: 'yesNo',
            },
            headerName: 'REFERENCE.DETAIL',
            field: 'detail',
            type: 'yesNo',
        },
    ];

    title = 'MENU.REFERENCE.TECHNICAL_GUIDES.DIRECTORY_OF_COUNTER_TYPES';
    request = new ReferenceListRequest(ReferenceApiUrls.METER_TYPE);

    addUpdate(id = null) {
        FormModalComponent.showModal(MeterTypeFormComponent, this.title, id, SizeModal.sm).subscribe(res => {
            if (res)
                this.reload();
        });
    }

    override filter: FilterFieldGroup = {
        code: new FilterField('GENERAL.CODE', 'input'),
        nameUz: new FilterField('GENERAL.NAME', 'input'),
        physicalConsumerAmount: new FilterField('REFERENCE.PHYSICAL_CONSUMER_AMOUNT', 'input'),
        legalConsumerAmount: new FilterField('REFERENCE.LEGAL_CONSUMER_AMOUNT', 'input'),
        admissibleCurrentAmper: new FilterField('REFERENCE.ADMISSIBLE_AMPERE', 'input'),
        average: new FilterField('REFERENCE.AVERAGE', 'input'),
        meterCapacity: new FilterField('REFERENCE.METER_CAPACITY', 'input'),
        meterView: new FilterField('REFERENCE.METER_VIEW', 'input'),
        measurementType: new FilterField('REFERENCE.MEASUREMENT_TYPE', 'yesNo'),
        askueCompatibility: new FilterField('REFERENCE.ASKUE_COMPATIBILITY', 'input'),
        multiTariff: new FilterField('REFERENCE.MULTI_TARIFF', 'yesNo'),
        realMeter: new FilterField('REFERENCE.REAL_METER', 'yesNo'),
        transferred: new FilterField('REFERENCE.TRANSFERRED', 'input'),
        meterManufacturerId: new FilterField('REFERENCE.METER_MANUFACTURER', 'autocomplete', new ReferenceDropDownRequest(ReferenceApiUrls.METER_MANUFACTURER)),
        detail: new FilterField('REFERENCE.DETAIL', 'yesNo'),
        status: new FilterField('GENERAL.STATUS', 'status'),
    }
}
