import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {PaymentSystemFormComponent} from "./actions/payment.system.form/payment.system.form.component";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {BasicTablePage} from "@shared/helpers/table/basic/basic.table.page";
import {basicTemplate} from "@app/modules/reference/basic/basicTemplate";

@Component({
    template: basicTemplate(),
})
export class PaymentSystemComponent extends BasicTablePage {
  columnDefs: ColDef[] = [
      {
          field: 'code',
          headerName: 'GENERAL.CODE',
      },
      {
        field: 'nameUz',
        headerName: 'GENERAL.NAME',
      },
      {
        field: 'prefix',
        headerName: 'REFERENCE.PREFIX',
      },
      {
        field: 'shortName',
        headerName: 'REFERENCE.SHORT_NAME',
      },
      {
        field: 'percent',
        headerName: 'REFERENCE.PERCENTAGE',
      },
      {
          field: 'status',
          headerName: 'GENERAL.STATUS',
          type: 'status',
      },
  ];

  title = 'MENU.REFERENCE.GENERAL_GUIDES.DIRECTORY_PAYMENT_SYSTEMS';
  request = new ReferenceListRequest(ReferenceApiUrls.PAYMENT_SYSTEM);

  addUpdate(id = null) {
    FormModalComponent.showModal(PaymentSystemFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
}
