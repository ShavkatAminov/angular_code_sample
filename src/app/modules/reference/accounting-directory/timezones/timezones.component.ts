import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {BasicReferencePage} from "../../basic.reference.page";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {TimezonesFormComponent} from "./actions/timezones.form/timezones.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";
;

@Component({
  template: basicTemplate(`
    <het-button [label]="'GENERAL.CHANGE_PROTOCOL'"></het-button>
    <het-select [options]="printOptions"  ></het-select>
    <het-button [label]="'GENERAL.PRINT'"></het-button>
  `),
})
export class TimezonesComponent extends BasicReferencePage {
  columnDefs: ColDef[] = [
      {field: 'code', maxWidth: 126, headerName: 'GENERAL.CODE'},
      {field: 'timezone', maxWidth: 156, headerName: 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.TIME_ZONES'},
      {field: 'nameUz', headerName: 'GENERAL.NAME'},
      {field: 'createdAt', type: 'date', headerName: 'GENERAL.CREATED_AT'},
      {field: 'createdByName', headerName: 'GENERAL.CREATED_BY',
          colId: 'createdBy', type: 'user'},
      {field: 'status', type: 'status', maxWidth: 126, headerName: 'GENERAL.STATUS'},
  ];



  title = 'REFERENCE.TIME_ZONE_DIRECTORY';
  request = new ReferenceListRequest(ReferenceApiUrls.TIMEZONES);

  addUpdate(id = null) {
      FormModalComponent.showModal(TimezonesFormComponent, this.title, id, SizeModal.sm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
}
