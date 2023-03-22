import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {BasicReferencePage} from "../../basic.reference.page";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {TimezonesFormComponent} from "./actions/timezones.form/timezones.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";
import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';

@Component({
  template: basicTemplate(),
})
export class TimezonesComponent extends BasicReferencePage {
  columnDefs: ColDef[] = [
      {field: 'code', maxWidth: 126, headerName: 'GENERAL.CODE'},
      {field: 'timezone', maxWidth: 156, headerName: 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.TIME_ZONES'},
      {field: 'nameUz', headerName: 'GENERAL.NAME'},
      {
          floatingFilterComponentParams: {
              type: 'date',
          },
          field: 'createdAt', type: 'date', maxWidth: 156, headerName: 'GENERAL.CREATED_AT'},
      {field: 'createdBy', headerName: 'GENERAL.CREATED_BY'},
      {
          floatingFilterComponentParams: {
              type: 'status',
          },
          field: 'status', type: 'status', maxWidth: 126, headerName: 'GENERAL.STATUS'},
  ];

  title = 'REFERENCE.TIME_ZONE_DIRECTORY';
  request = new ReferenceListRequest(ReferenceApiUrls.TIMEZONES);

  addUpdate(id = null) {
      FormModalComponent.showModal(TimezonesFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
  override filter: FilterFieldGroup = {
      code: new FilterField('GENERAL.CODE', 'input'),
      timezone: new FilterField('MENU.REFERENCE.ACCOUNTING_HANDBOOKS.TIME_ZONES', 'input'),
      nameUz: new FilterField('GENERAL.NAME', 'input'),
      status: new FilterField('GENERAL.STATUS', 'status'),
  }
}
