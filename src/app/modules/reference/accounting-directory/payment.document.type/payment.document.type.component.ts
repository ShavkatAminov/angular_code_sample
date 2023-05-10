import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {PaymentDocumentTypeFormComponent} from "./actions/payment.document.type.form/payment.document.type.form.component";
import {BasicReferencePage} from "../../basic.reference.page";
import { SizeModal} from "@shared/helpers/modal/modal.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
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
export class PaymentDocumentTypeComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {field: 'id', flex: 3, headerName: 'REFERENCE.DOCUMENT_TYPE_CODE'},
        {field: 'nameUz', headerName: 'REFERENCE.DOCUMENT_TYPE_NAME'},
        {field: 'specialAccount', flex: 3, type: 'yesNo', headerName: 'REFERENCE.SPECIAL_ACCOUNT'},
        {field: 'checkingAccountAmount', flex: 3, type: 'yesNo', headerName: 'REFERENCE.MONEY_CHECKING_ACCOUNT',},
        {field: 'specialAccountTranche', flex: 3, type: 'yesNo', headerName: 'REFERENCE.JN_ACCOUNT_TRANCHE'},
        {field: 'status', flex: 3, type: 'status', headerName: 'GENERAL.STATUS'}
    ];


    title = 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.DIRECTORY_OF_TYPES_OF_PAYMENT_DOCUMENTS';
    request = new ReferenceListRequest(ReferenceApiUrls.PAYMENT_DOCUMENT_TYPE);

  addUpdate(id = null) {
      FormModalComponent.showModal(PaymentDocumentTypeFormComponent, this.title, id, SizeModal.sm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
}
