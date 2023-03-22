import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {TariffsFormComponent} from "./actions/tariffs.form/tariffs.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {BasicReferencePage} from "../../basic.reference.page";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup} from 'app/shared/helpers/filter/filter.component/filterField';
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";

@Component({
    template: basicTemplate(),
})
export class TariffsComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {field: 'code', flex: 2, headerName: 'GENERAL.CODE', minWidth: 100},
        {field: 'createdAt', type: 'date', flex: 2, headerName: 'GENERAL.DATE', minWidth: 150,
            floatingFilterComponentParams: {
                type: 'date',
            },
        },
        {field: 'nameUz', flex: 4, headerName: 'REFERENCE.NAME_OF_TARIFFS', minWidth: 200},
        {field: 'tariffGroup.code', flex: 2, headerName: 'REFERENCE.TARIFF_GROUP', minWidth: 150,
            floatingFilter: false,
        },
        {
            colId: 'tariffGroupId',
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.TARIFF_GROUP),
            },
            field: 'tariffGroup.nameUz', flex: 4, headerName: 'REFERENCE.TARIFF_GROUP', minWidth: 300},
        {field: 'price', flex: 2, headerName: 'GENERAL.PRICE', minWidth: 150},
        {field: 'nds', type: 'yesNo', flex: 2, headerName: 'GENERAL.VAT', minWidth: 150,
            floatingFilterComponentParams: {
                type: 'yesNo',
            },
        },
        {field: 'isDefault', type: 'yesNo', flex: 2, headerName: 'GENERAL.DEFAULT', minWidth: 150,
            floatingFilterComponentParams: {
                type: 'yesNo',
            },
        },
        {field: 'baseTariffCodeId', flex: 2, headerName: 'REFERENCE.BASE_RATE_CODE', minWidth: 150},
        {
            colId: 'timezoneId',
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.TIMEZONES),
            },
            field: 'timezone.timezone', flex: 2, headerName: 'REFERENCE.ZONE_TIME', minWidth: 150},
        {
            colId: 'indicationTypeId',
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.INDICATION_TYPES),
            },
            field: 'indicationType.nameUz', flex: 2, headerName: 'REFERENCE.INDICATION_TYPE', minWidth: 150},
        {field: 'deactivationDate', type: 'date', flex: 2, headerName: 'REFERENCE.DEACTIVATION_PERIOD', minWidth: 150},
        {field: 'status', type: 'status', flex: 2, headerName: 'GENERAL.STATUS', minWidth: 150,
            floatingFilterComponentParams: {
                type: 'status',
            },
        },
        {field: 'createdBy', flex: 4, headerName: 'GENERAL.LOGIN', minWidth: 200},
    ];

    title = 'REFERENCE.TARIFFS_TITLE';
    request = new ReferenceListRequest(ReferenceApiUrls.TARIFFS);

    addUpdate(id = null) {
        FormModalComponent.showModal(TariffsFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
            if (res)
                this.reload();
        });
    }

    override filter: FilterFieldGroup = {
        tariffGroupId: new FilterField('REFERENCE.TARIFF_GROUP', 'input'),
        code: new FilterField('REFERENCE.TARIFF_CODE', 'input'),
        name: new FilterField('GENERAL.NAME', 'input'),
        price: new FilterField('GENERAL.PRICE', 'input'),
        nds: new FilterField('GENERAL.VAT', 'status'),
        isDefault: new FilterField('GENERAL.DEFAULT', 'status'),
        indicationTypeId: new FilterField('REFERENCE.INDICATION_TYPE', 'input'),
        baseTariffCodeId: new FilterField('REFERENCE.BASE_RATE_CODE', 'input'),
        timezoneId: new FilterField('REFERENCE.ZONE_TIME', 'input'),
        status: new FilterField('GENERAL.STATUS', 'status'),
        deactivationDate: new FilterField('REFERENCE.DEACTIVATION_PERIOD', 'input'),
    }
}
