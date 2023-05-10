import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {OutageCausesFormComponent} from "./actions/outage.causes.form/outage.causes.form.component";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";
;

@Component({
  template: basicTemplate(`
    <het-button [label]="'GENERAL.CHANGE_PROTOCOL'"></het-button>
    <het-select [options]="printOptions" value="HTML" ></het-select>
    <het-button [label]="'GENERAL.PRINT'"></het-button>
  `),
})
export class OutageCausesComponent extends BasicReferencePage {
  columnDefs: ColDef[] = [
      {
        headerName: 'GENERAL.CODE',
        field: 'id',
        maxWidth: 200,
        cellStyle: { textAlign: 'center' }
      },
      {
        headerName: 'REFERENCE.NAME_TRIP_TYPE',
        field: 'nameUz',
        cellStyle: { textAlign: 'center' }
      },
      {
        headerName: 'REFERENCE.GENERAL_STATUS',
        field: 'status',
        type: 'status',
        maxWidth: 200,
        cellStyle: { textAlign: 'center' }
      },
  ];


  title = 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.OUTAGE_CAUSE_DIRECTORY';
  request = new ReferenceListRequest(ReferenceApiUrls.OUTAGE_CAUSES);

  addUpdate(id = null) {
      FormModalComponent.showModal(OutageCausesFormComponent, this.title, id, SizeModal.sm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
}
