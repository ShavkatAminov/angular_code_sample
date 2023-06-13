import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {InterfaceInstalledMeterFormComponent} from "./actions/interface.installed.meter.form/interface.installed.meter.form.component";
import {BasicReferencePage} from "../../basic.reference.page";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";

@Component({
  template: basicTemplate(),
})
export class InterfaceInstalledMeterComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {
            field: 'code',
            headerName:'REFERENCE.UPSTREAM_METER_CODE',
            maxWidth:140,
            resizable: true,
            pinned:"left"
        },
        {
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.METER_TYPE),
            },
            colId: 'meterTypeId',
            valueGetter:params => {
                return params.data?params.data.meterType.nameUz:''
            },
            headerName:'REFERENCE.TYPE_METER_BORDER_SECTION',
            minWidth:140,
            resizable: true,
            pinned:"left"
        },
        {
            field: 'meterSerialNumber',
            headerName:'REFERENCE.SERIAL_METER',
            minWidth:110,
            pinned:"left"
        },
        {
            field: 'coefficient',
            headerName:'REFERENCE.TRANSFORMATION_RATIO_CALCULATION',
            minWidth:150
        },
        {
            field: 'lostAmount',
            headerName:'REFERENCE.LOSS_AMOUNT',
            minWidth:130
        },
        {
            field: 'sealSetupDate',
            headerName:'ACCOUNTING_SETTLEMENT_LC.DATE_FILLING_INSTALLATION',
            type: 'date',
        },
        {
            field: 'sealNumber',
            headerName:'REFERENCE.NUMBER_SEALS_UZSTANDARD',
            minWidth:130
        },
        {
            field: 'standardSealDate',
            headerName:'REFERENCE.DATE_SEAL_UZSTANDARD',
            type: 'date',
        },
        {
            field: 'askueConnection',
            headerName:'ACCOUNTING_SETTLEMENT_HC.CONNECTION_TO_ASKUE',
            minWidth:130
        },
        {
            field: 'installationDate',
            headerName:'REFERENCE.DATE_INSTALLATION',
            type: 'date',
        },
        {
            field: 'sealedCalculationAmountActive',
            headerName:'REFERENCE.INDICATIONS_DURING_INSTALLATION',
            minWidth:200
        },
        {
            field: 'sealedCalculationAmountReactive',
            headerName:'REFERENCE.INDICATIONS_FOR_REAGENT_INSTALLATION',
            minWidth:150
        },
        {
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.SUBSTATION),
            },
            field: 'substationId',
            valueGetter:params => {
                return params.data?params.data.substation.nameUz:null
            },
            headerName:'REFERENCE.INDICATIONS_DURING_INSTALLATION',
            minWidth:200
        },
        {
            field: 'cableLineCode',
            headerName:'REFERENCE.CABLE_AIR_LINE',
            minWidth:150
        },
        {
            field: 'part1',
            headerName:'REFERENCE.SECTION_1',
            minWidth:100

        },
        {
            field: 'inputOutput1',
            headerName:'REFERENCE.INPUT_OUTPUT_1',
            minWidth:100
        },
        {
            field: 'part2',
            headerName:'REFERENCE.SECTION_2',
            minWidth:100
        },
        {
            field: 'inputOutput2',
            headerName:'REFERENCE.INPUT_OUTPUT_2',
            minWidth:100
        },
        {
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.ORC_AGENT),
            },
            colId: 'agentId',
            valueGetter:params => {
                return params.data?params.data.agent.lastName+' '+ params.data.agent.firstName+' '+params.data.agent.middleName:null
            },
            headerName:'REFERENCE.AGENT_ORC',
            minWidth:350
        },
        {
            field: 'status',
            headerName:'GENERAL.STATUS',
            minWidth:110,
            type:"status"

        }
    ];

    title = 'MENU.REFERENCE.STRUCTURAL_GUIDES.DIRECTORY_OF_COUNTERS_INSTALLED_ON_THE_PARTITION_BOUNDARY';
    request = new ReferenceListRequest(ReferenceApiUrls.INTERFACE_INSTALLED_METER);

    addUpdate(id = null) {
        FormModalComponent.showModal(InterfaceInstalledMeterFormComponent, this.title, id, SizeModal.md).subscribe(res => {
            if (res)
                this.reload();
        });
    }
}
