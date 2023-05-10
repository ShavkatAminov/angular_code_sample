import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {BasicReferencePage} from '../../basic.reference.page';
import {MeterTypeFormComponent} from "./actions/meter.type.form/meter.type.form.component";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";
import {
    ASKUE_COMPATABILITY,
    MEASUREMENT_TYPE_ENUM, METER_VIEW, PHASE_TYPE
} from "@app/modules/reference/technical-directories/meter.type/enum/measurement.type.enum";
import {TranslocoService} from "@ngneat/transloco";
import {HttpClientService} from "@shared/helpers/service/http/http.client.service";
import {AlertServiceComponent} from "@shared/helpers/alerts/services/alert.service.component";
import {OptionsObj} from "@shared/helpers/form/interfaces/options";

@Component({
    template: basicTemplate(),
})
export class MeterTypeComponent extends BasicReferencePage {
    constructor(private translate: TranslocoService, public http: HttpClientService, public alert: AlertServiceComponent) {
        super(http, alert);
    }
    ngOnInit(): void {
        this.defaultColumnDef['minWidth'] = 150
    }
    measurementTypeOption = [
        {
            id: MEASUREMENT_TYPE_ENUM.ACTIVE,
            name: this.translate.translate("GENERAL.ACTIVE")
        },
        {
            id: MEASUREMENT_TYPE_ENUM.REACTIVE,
            name: this.translate.translate("GENERAL.REACTIVE")
        },
        {
            id: MEASUREMENT_TYPE_ENUM.ACTIVE_REACTIVE,
            name: this.translate.translate("GENERAL.ACTIVE_REACTIVE")
        },
    ]
    options: OptionsObj[] = [{
        id: PHASE_TYPE.SINGLE_PHASE,
        name: 'REFERENCE.1PHASE',
    },{
        id: PHASE_TYPE.THREE_PHASE,
        name: 'REFERENCE.3PHASE',
    }]
    meterView: OptionsObj[] = [{
        id: METER_VIEW.ELECTRONIC,
        name: 'REFERENCE.ELECTRONIC',
    },{
        id: METER_VIEW.DISK,
        name: 'REFERENCE.DISK',
    }]
    YesNoSmart: OptionsObj[] = [{
        id: ASKUE_COMPATABILITY.YES,
        name: 'GENERAL.YES',
    },{
        id: ASKUE_COMPATABILITY.NO,
        name: 'GENERAL.NO',
    },{
        id: ASKUE_COMPATABILITY.SMARTCARD,
        name: 'GENERAL.SMARTCARD',
    }
    ]
    columnDefs: ColDef[] = [
        {
            headerName: 'REFERENCE.METER_TYPE_CODE',
            field: 'code',
        },
        {
            headerName: 'REFERENCE.METER_TYPE',

            field: 'nameUz',
        },

        {
            headerName: 'REFERENCE.TOTAL',
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
            floatingFilterComponentParams: {
                type: 'select',
                options: this.meterView,
            },
            cellRenderer: params => params.value ? this.translate.translate('REFERENCE.' + params.value) : '',
        },
        {
            headerName: 'REFERENCE.MEASUREMENT_TYPE',
            field: 'measurementType',
            floatingFilterComponentParams: {
                type: 'select',
                options: this.measurementTypeOption,
            },
            cellRenderer: params => params.value ? this.translate.translate('GENERAL.' + params.value) : '',
        },
        {
            headerName: 'REFERENCE.COMPATIBILITY_WITH_ASKUE',
            field: 'askueCompatibility',
            floatingFilterComponentParams: {
                type: 'select',
                options: this.YesNoSmart,
            },
            cellRenderer: params => params.value ? this.translate.translate('GENERAL.' + params.value) : '',
        },
        {
            headerName: "REFERENCE.MULTI_TARIFF",
            type: 'yesNo',
            field: 'multiTariff',
        },
        {
            headerName: 'GENERAL.STATUS',
            type: 'status',
            field: 'status',
        },
        {
            headerName: 'REFERENCE.REAL_METER',
            type: 'yesNo',
            field: 'realMeter',
        },
        {
            headerName: 'REFERENCE.TRANSFERRED',
            field: 'transferred',
        },
        {
            colId: 'meterManufacturerId',
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.METER_MANUFACTURER),
            },
            headerName: 'REFERENCE.METER_MANUFACTURER',
            field: 'meterManufacturer.nameUz',
        },
        {
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
}
