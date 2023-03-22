import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import { UtilitiesFormComponent } from './actions/utilities.form/utilities.form.component';
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";

import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';

@Component({
  template: basicTemplate(),
})
export class UtilitiesComponent extends BasicReferencePage{
  columnDefs: ColDef[] = [
    {
      field: 'code',
      headerName: 'GENERAL.SERVICE_CODE',
    },
    {
      field: 'nameUz',
      headerName: 'GENERAL.SERVICE_NAME',
      flex: 20,
    },
    {
      floatingFilterComponentParams: {
        type: 'status',
      },
      type: 'status',
      field: 'status',
      headerName: 'GENERAL.STATUS',
    }
  ];

  title = 'MENU.REFERENCE.GENERAL_GUIDES.UTILITIES';
  request = new ReferenceListRequest(ReferenceApiUrls.UTILITIES);

  addUpdate(id = null) {
    FormModalComponent.showModal(UtilitiesFormComponent, this.title, id, SizeModal.sm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
  override filter: FilterFieldGroup = {
    code: new FilterField('GENERAL.SERVICE_CODE', 'input'),
    nameUz: new FilterField('GENERAL.SERVICE_NAME', 'input'),
    status: new FilterField('GENERAL.STATUS', 'status'),
  }
}
