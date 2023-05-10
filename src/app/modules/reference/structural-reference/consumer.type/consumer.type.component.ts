import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {ConsumerTypeFormComponent} from "./actions/consumer.type.form/consumer.type.form.component";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

@Component({
  template: basicTemplate(),
})
export class ConsumerTypeComponent extends BasicReferencePage {
  columnDefs: ColDef[] = [
    {field: 'id', maxWidth: 204, headerName: 'GENERAL.CODE'},
    {field: 'nameUz', headerName: 'GENERAL.NAME'},
    {field: 'status',  maxWidth: 204, headerName: 'GENERAL.STATUS', type: 'status'},
  ];

  title = 'REFERENCE.CONSUMER_TYPE';
  request = new ReferenceListRequest(ReferenceApiUrls.CONSUMER_TYPE);

  addUpdate(id = null) {
    FormModalComponent.showModal(ConsumerTypeFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
}
