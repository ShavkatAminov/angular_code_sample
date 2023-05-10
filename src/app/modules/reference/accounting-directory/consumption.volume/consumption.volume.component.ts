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
      {field: 'code', flex: 2, headerName: 'REFERENCE.WINDOW_CODE', minWidth: 150},
      {field: 'nameUz', flex: 5, headerName: 'REFERENCE.VOLUME_NAME', minWidth: 150},
      {field: 'activationPeriod', type: 'date', flex: 2, headerName: 'REFERENCE.ACTIVATION_PERIOD'},
      {field: 'fromKWhInterval', flex: 2, headerName: 'REFERENCE.INTERVAL_WITH_KWH', minWidth: 150},
      {field: 'toKWhInterval', flex: 2, headerName: 'REFERENCE.KWH_INTERVAL', minWidth: 150},
      {field: 'tariff.code', flex: 2, headerName: 'REFERENCE.TARIFF_CODE', minWidth: 150,
          colId: 'tariffId',
          floatingFilterComponentParams: {
              type: 'autocomplete',
              request: new RegistersDropDownRequest(ReferenceApiUrls.BASE_TARIFF_CODES),
          },
      },
      {field: 'price',flex: 2, headerName: 'REFERENCE.TARIFF_AMOUNT', minWidth: 150},
      {field: 'baseTariffId', flex: 2, headerName: 'REFERENCE.BASE_TARIFF', minWidth: 150,
          floatingFilterComponentParams: {
              type: 'autocomplete',
              request: new RegistersDropDownRequest(ReferenceApiUrls.BASE_TARIFF_CODES),
          },
      },
      {field: 'createdAt', type: 'date', flex: 2, headerName: 'GENERAL.CREATED_AT'},
      {field: 'createdByName', flex: 4, headerName: 'GENERAL.CREATED_BY', type: 'user'},
      {field: 'updatedAt', type: 'date', flex: 3, headerName: 'GENERAL.UPDATED_AT'},
      {field: 'updatedByName', flex: 4, headerName: 'GENERAL.UPDATED_BY', type: 'user'},
      {field: 'status', type: 'status', flex: 2, headerName: 'GENERAL.STATUS', minWidth: 150,},
  ];


  title = 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.CONSUMPTION_VOLUMEK_WH';
  request = new ReferenceListRequest(ReferenceApiUrls.CONSUMPTION_VOLUME);

  addUpdate(id = null) {
    FormModalComponent.showModal(ConsumptionVolumeFormComponent, this.title, id, SizeModal.xsm ).subscribe(res => {
      if(res)
        this.reload();
    });
  }
}
