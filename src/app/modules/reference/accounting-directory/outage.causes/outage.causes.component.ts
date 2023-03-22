import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {OutageCausesFormComponent} from "./actions/outage.causes.form/outage.causes.form.component";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';

@Component({
  template: basicTemplate(),
})
export class OutageCausesComponent extends BasicReferencePage {
  columnDefs: ColDef[] = [
      {
        headerName: 'GENERAL.CODE',
        field: 'code',
        maxWidth: 70,
        cellStyle: { textAlign: 'center' }
      },
      {
        headerName: 'REFERENCE.NAME_TRIP_TYPE',
        field: 'nameUz',
        cellStyle: { textAlign: 'center' }
      },
      {
        floatingFilterComponentParams: {
            type: 'status',
        },
        headerName: 'REFERENCE.GENERAL_STATUS',
        field: 'status',
        type: 'status',
        maxWidth: 120,
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
  override filter: FilterFieldGroup = {
    nameUz: new FilterField('REFERENCE.NAME_TRIP_TYPE', 'input'),
    code: new FilterField('GENERAL.CODE', 'input'),
    status: new FilterField('REFERENCE.GENERAL_STATUS', 'status'),
  }
}
