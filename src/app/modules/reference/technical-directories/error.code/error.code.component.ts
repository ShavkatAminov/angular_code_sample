import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {BasicReferencePage} from "../../basic.reference.page";
import {ErrorCodeFormComponent} from "./actions/error.code.form/error.code.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';

@Component({
  template: basicTemplate(),
})
export class ErrorCodeComponent extends BasicReferencePage {
  columnDefs: ColDef[] = [
      {field: 'code', flex: 1, headerName: 'GENERAL.CODE'},
      {field: 'nameUz', headerName: 'GENERAL.NAME'},
      {
        floatingFilterComponentParams: {
          type: 'status',
        },
        field: 'status', type: 'status', flex: 2, headerName: 'GENERAL.STATUS'},
  ];

  title = 'MENU.REFERENCE.TECHNICAL_GUIDES.ERROR_CODES';
  request = new ReferenceListRequest(ReferenceApiUrls.ERROR_CODE);

  addUpdate(id = null) {
    FormModalComponent.showModal(ErrorCodeFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
  override filter: FilterFieldGroup = {
    nameUz: new FilterField('GENERAL.NAME', 'input'),
    code: new FilterField('GENERAL.CODE', 'input'),
    status: new FilterField('GENERAL.STATUS', 'status'),
  }
}
