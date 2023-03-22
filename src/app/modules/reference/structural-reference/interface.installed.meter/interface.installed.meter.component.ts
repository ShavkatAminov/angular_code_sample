import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {InterfaceInstalledMeterFormComponent} from "./actions/interface.installed.meter.form/interface.installed.meter.form.component";
import {BasicReferencePage} from "../../basic.reference.page";
import {SizeModal} from "../../../../shared/helpers/modal/modal.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "../../../../shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";

@Component({
  template: basicTemplate(),
})
export class InterfaceInstalledMeterComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {
            field: 'code',
            headerName:'REFERENCE.UPSTREAM_METER_CODE',
            minWidth:140,
            resizable: true
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
            resizable: true
        },
        {
            field: 'meterSerialNumber',
            headerName:'REFERENCE.SERIAL_METER',
            minWidth:110
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
            headerName:'REFERENCE.DATE_OF_FILLING_INSTALLATION',
            minWidth:130
        },
        {
            field: 'sealNumber',
            headerName:'REFERENCE.NUMBER_SEALS_UZSTANDARD',
            minWidth:130
        },
        {
            field: 'standardSealDate',
            headerName:'REFERENCE.DATE_OF_THE_SEAL_UZSTANDARD',
            minWidth:130
        },
        {
            field: 'askueConnection',
            headerName:'REFERENCE.CONNECTION_TO_ASKUE',
            minWidth:130
        },
        {
            field: 'installationDate',
            headerName:'REFERENCE.DATE_INSTALLATION',
            minWidth:120
        },
        {
            field: 'sealedCalculationAmountActive',
            headerName:'REFERENCE.INDICATIONS_DURING_INSTALLATION',
            minWidth:150
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
            minWidth:150
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
            minWidth:200
        },
        {
            floatingFilterComponentParams: {
                type: 'status',
            },
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
  override filter: FilterFieldGroup = {
    code: new FilterField('REFERENCE.UPSTREAM_METER_CODE', 'input'),
    meterTypeId: new FilterField('REFERENCE.TYPE_METER_BORDER_SECTION', 'autocomplete',new ReferenceDropDownRequest(ReferenceApiUrls.METER_TYPE)),
    meterSerialNumber: new FilterField('REFERENCE.SERIAL_METER', 'input'),
    coefficient: new FilterField('REFERENCE.TRANSFORMATION_RATIO_CALCULATION', 'input'),
    lostAmount: new FilterField('REFERENCE.LOSS_AMOUNT', 'input'),
    sealSetupDate: new FilterField('REFERENCE.DATE_OF_FILLING_INSTALLATION', 'input'),
    sealNumber: new FilterField('REFERENCE.NUMBER_SEALS_UZSTANDARD', 'input'),
    standardSealDate: new FilterField('REFERENCE.DATE_OF_THE_SEAL_UZSTANDARD', 'input'),
    askueConnection: new FilterField('REFERENCE.CONNECTION_TO_ASKUE', 'input'),
    installationDate: new FilterField('REFERENCE.DATE_INSTALLATION', 'input'),
    sealedCalculationAmountActive: new FilterField('REFERENCE.INDICATIONS_DURING_INSTALLATION', 'input'),
    sealedCalculationAmountReactive: new FilterField('REFERENCE.INDICATIONS_FOR_REAGENT_INSTALLATION', 'input'),
    substationId: new FilterField('REFERENCE.INDICATIONS_DURING_INSTALLATION', 'autocomplete',new ReferenceDropDownRequest(ReferenceApiUrls.SUBSTATION)),
    cableLineCode: new FilterField('REFERENCE.CABLE_AIR_LINE', 'input'),
    part1: new FilterField('REFERENCE.SECTION_1', 'input'),
    inputOutput1: new FilterField('REFERENCE.INPUT_OUTPUT_1', 'input'),
    part2: new FilterField('REFERENCE.SECTION_2', 'input'),
    inputOutput2: new FilterField('REFERENCE.INPUT_OUTPUT_2', 'input'),
    agentId: new FilterField('REFERENCE.AGENT_ORC', 'autocomplete',new ReferenceDropDownRequest(ReferenceApiUrls.ORC_AGENT)),
    status: new FilterField('GENERAL.STATUS', 'status'),
  }
}
