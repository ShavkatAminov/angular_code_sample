  import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {BasicReferencePage} from "../../basic.reference.page";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import { MeterManufacturesFormComponent } from './actions/meter.manufactures.form/meter.manufactures.form.component';
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

@Component({
  template: basicTemplate(),
})
export class MeterManufacturerComponent extends BasicReferencePage {
  ngOnInit(): void {
    this.defaultColumnDef['minWidth'] = 150
  }
  columnDefs: ColDef[] = [
    {
      flex: 2,
      field: 'id',
      headerName: 'GENERAL.ID',
    },
    {
      field: 'nameUz',
      headerName: 'REFERENCE.NAME_TYPE_METER',
    },
    {
      field: 'amountOfSignsInSerialNumber',
      headerName: 'REFERENCE.NUMBER_OF_CHARACTERS_IN_SERIAL_NUMBER',
      flex: 7
    },
    {
      field: 'presenceOfSymbols',
      type: 'yesNo',
      headerName: 'REFERENCE.PRESENCE_OF_CHARACTERS',
      flex: 5
    },
    {
      field: 'status',
      type: 'status',
      headerName: 'GENERAL.STATUS',
      flex: 3
    },
    {
      field: 'updatedAt',
      type: 'date',
      headerName: 'GENERAL.UPDATED_AT',
      flex: 3
    },
    {
      type: 'user',
      field: 'createdByName',
      headerName: 'GENERAL.LOGIN',
    },
  ];

  title = 'MENU.REFERENCE.TECHNICAL_GUIDES.METER_MANUFACTURERS';
  request = new ReferenceListRequest(ReferenceApiUrls.METER_MANUFACTURER);

  addUpdate(id = null) {
    FormModalComponent.showModal(MeterManufacturesFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
}
