import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {TariffsFormComponent} from "./actions/tariffs.form/tariffs.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {BasicReferencePage} from "../../basic.reference.page";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {basicTemplate} from "../../basic/basicTemplate";
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";

;

@Component({
    template: basicTemplate(`
    <het-button [label]="'FORM.STORY'"></het-button>
    <het-button [label]="'REFERENCE.CHANGE_TARIFF'" 
    [disabled]="selectedRowData ? !this.selectedRowData.status:true"
    (click)="addEdit(this.selectedRowId)">
    </het-button>
    <het-button [label]="'GENERAL.CHANGE_PROTOCOL'"></het-button>
    <het-select [options]="printOptions" value="HTML" ></het-select>
    <het-button [label]="'GENERAL.PRINT'"></het-button>
  `),
})
export class TariffsComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {
            field: 'code',
            flex: 2,
            headerName: 'GENERAL.CODE',
            maxWidth: 100,
            pinned: "left"
        },
        {
            field: 'createdAt',
            type: 'date',
            maxWidth: 280,
            headerName: 'GENERAL.DATE',
            pinned: "left"
        },
        {
            field: 'nameUz',
            flex: 4,
            headerName: 'REFERENCE.NAME_OF_TARIFFS',
            minWidth: 300,
            pinned: "left"
        },
        {
            colId: 'tariffGroupId',
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.TARIFF_GROUP),
            },
            field: 'tariffGroup',
            cellRenderer: (params) => {
                if (params.value) {
                    return params.value.id + '-' + params.value.nameUz
                }
                return "";
            },
            flex: 4,
            headerName: 'REFERENCE.TARIFF_GROUP',
            minWidth: 700
        },
        {
            field: 'price',
            flex: 2,
            headerName: 'GENERAL.PRICE',
            minWidth: 150
        },
        {
            field: 'nds', type: 'yesNo', flex: 2, headerName: 'GENERAL.VAT',
            minWidth: 150
        },
        {
            field: 'isDefault',
            type: 'yesNo',
            flex: 2,
            headerName: 'GENERAL.DEFAULT',
            minWidth: 150
        },
        {
            field: 'baseTariffCodeId',
            flex: 2,
            headerName: 'REFERENCE.BASE_RATE_CODE',
            minWidth: 150
        },
        {
            colId: 'timezoneId',
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.TIMEZONES),
            },
            field: 'timezone.timezone', flex: 2, headerName: 'REFERENCE.ZONE_TIME', minWidth: 150
        },
        {
            colId: 'indicationTypeId',
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.INDICATION_TYPES),
            },
            field: 'indicationType.nameUz', flex: 2, headerName: 'REFERENCE.INDICATION_TYPE', minWidth: 150
        },
        {
            field: 'deactivationDate',
            type: 'date',
            flex: 2,
            headerName: 'REFERENCE.DEACTIVATION_PERIOD'
        },
        {
            field: 'status',
            type: 'status',
            flex: 2,
            headerName: 'GENERAL.STATUS',
            minWidth: 150
        },
        {
            field: 'createdByName', flex: 4, type: 'user',
            colId: 'createdBy', headerName: 'GENERAL.LOGIN'
        },
    ];


    title = 'REFERENCE.TARIFFS_TITLE';
    request = new ReferenceListRequest(ReferenceApiUrls.TARIFFS);

    addEdit(id) {
        FormModalComponent.showModal(TariffsFormComponent, this.title, {id: id, isEditTariff: false}, SizeModal.sm)
            .subscribe(res => {
                if (res)
                    this.reload();
            });
    }

    addUpdate(id = null) {
        FormModalComponent.showModal(TariffsFormComponent, this.title, {
            id: id,
            isEditTariff: true
        }, SizeModal.sm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
}
