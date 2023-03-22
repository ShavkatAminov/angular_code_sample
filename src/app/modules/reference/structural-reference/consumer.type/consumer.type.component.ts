import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "../../../../shared/helpers/modal/modal.component";
import {ConsumerTypeFormComponent} from "./actions/consumer.type.form/consumer.type.form.component";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {FormModalComponent} from "../../../../shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';

@Component({
  template: basicTemplate(),
})
export class ConsumerTypeComponent extends BasicReferencePage {
  columnDefs: ColDef[] = [
    {field: 'code', maxWidth: 204, headerName: 'GENERAL.CODE'},
    {field: 'nameUz', headerName: 'GENERAL.NAME'},
    {
      floatingFilterComponentParams: {
        type: 'status',
      },
      field: 'status',  maxWidth: 204, headerName: 'GENERAL.STATUS'},
  ];

  title = 'MENU.REFERENCE.STRUCTURAL_GUIDES.CONSUMER_TYPE';
  request = new ReferenceListRequest(ReferenceApiUrls.CONSUMER_TYPE);

  addUpdate(id = null) {
    FormModalComponent.showModal(ConsumerTypeFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
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
