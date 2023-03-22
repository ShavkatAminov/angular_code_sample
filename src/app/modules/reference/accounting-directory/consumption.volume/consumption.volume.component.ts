import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {ConsumptionVolumeFormComponent} from "./actions/consumption.volume.form/consumption.volume.form.component";
import {BasicReferencePage} from "../../basic.reference.page";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {basicTemplate} from "../../basic/basicTemplate";
import {FilterField, FilterFieldGroup} from "@shared/helpers/filter/filter.component/filterField";
import {ReferenceDropDownRequest, RegistersDropDownRequest} from "../../basic/ReferenceDropDownRequest";

@Component({
    template: basicTemplate(),
})
export class ConsumptionVolumeComponent extends BasicReferencePage {
  columnDefs: ColDef[] = [
      {field: 'code', flex: 2, headerName: 'REFERENCE.WINDOW_CODE', minWidth: 150},
      {field: 'nameUz', flex: 5, headerName: 'REFERENCE.VOLUME_NAME', minWidth: 150},
      {field: 'activationPeriod', type: 'date', flex: 2, headerName: 'REFERENCE.ACTIVATION_PERIOD', minWidth: 150},
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
      {field: 'createdAt', type: 'date', flex: 2, headerName: 'GENERAL.CREATED_AT', minWidth: 150, filter: false, floatingFilter: false},
      {field: 'createdBy', flex: 4, headerName: 'GENERAL.CREATED_BY', minWidth: 150, filter: false, floatingFilter: false},
      {field: 'updatedAt', type: 'date', flex: 3, headerName: 'GENERAL.UPDATED_AT', minWidth: 150, filter: false, floatingFilter: false},
      {field: 'updatedBy', flex: 4, headerName: 'GENERAL.UPDATED_BY', minWidth: 150, filter: false, floatingFilter: false},
      {field: 'status', type: 'status', flex: 2, headerName: 'GENERAL.STATUS', minWidth: 150,
          floatingFilterComponentParams: {
              type: 'status',
          },
      },
  ];

  title = 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.CONSUMPTION_VOLUMEK_WH';
  request = new ReferenceListRequest(ReferenceApiUrls.CONSUMPTION_VOLUME);

  addUpdate(id = null) {
    FormModalComponent.showModal(ConsumptionVolumeFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
    override filter: FilterFieldGroup = {
        code: new FilterField('REFERENCE.WINDOW_CODE', 'input'),
        nameUz: new FilterField('REFERENCE.VOLUME_NAME', 'input'),
        tariffId: new FilterField('REFERENCE.TARIFF_CODE', 'autocomplete', new ReferenceDropDownRequest(ReferenceApiUrls.TARIFFS)),
        baseTariffId: new FilterField('REFERENCE.BASE_TARIFF', 'autocomplete', new RegistersDropDownRequest(ReferenceApiUrls.BASE_TARIFF_CODES)),
        status: new FilterField('GENERAL.STATUS', 'status'),
    }
}
