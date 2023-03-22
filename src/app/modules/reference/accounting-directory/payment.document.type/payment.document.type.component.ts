import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {PaymentDocumentTypeFormComponent} from "./actions/payment.document.type.form/payment.document.type.form.component";
import {BasicReferencePage} from "../../basic.reference.page";
import { SizeModal} from "../../../../shared/helpers/modal/modal.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "../../../../shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';

@Component({
  template: basicTemplate(),
})
export class PaymentDocumentTypeComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {field: 'code', flex: 3, headerName: 'REFERENCE.DOCUMENT_TYPE_CODE'},
        {field: 'nameUz', headerName: 'REFERENCE.DOCUMENT_TYPE_NAME'},
        {field: 'specialAccount', flex: 3, type: 'yesNo', headerName: 'REFERENCE.SPECIAL_ACCOUNT',
            floatingFilterComponentParams: {
                type: 'yesNo',
            },
        },
        {field: 'checkingAccountAmount', flex: 3, type: 'yesNo', headerName: 'REFERENCE.MONEY_CHECKING_ACCOUNT',
            floatingFilterComponentParams: {
                type: 'yesNo',
            },
        },
        {field: 'specialAccountTranche', flex: 3, type: 'yesNo', headerName: 'REFERENCE.JN_ACCOUNT_TRANCHE',
            floatingFilterComponentParams: {
                type: 'yesNo',
            },
        },
        {field: 'status', flex: 3, type: 'status', headerName: 'GENERAL.STATUS',
            floatingFilterComponentParams: {
                type: 'status',
            },
        }
    ];

    title = 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.DIRECTORY_OF_TYPES_OF_PAYMENT_DOCUMENTS';
    request = new ReferenceListRequest(ReferenceApiUrls.PAYMENT_DOCUMENT_TYPE);

  addUpdate(id = null) {
      FormModalComponent.showModal(PaymentDocumentTypeFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
  override filter: FilterFieldGroup = {
    code: new FilterField('REFERENCE.DOCUMENT_TYPE_CODE', 'input'),
    nameUz: new FilterField('REFERENCE.DOCUMENT_TYPE_NAME', 'input'),
    specialAccount: new FilterField('REFERENCE.SPECIAL_ACCOUNT', 'yesNo'),
    checkingAccountAmount: new FilterField('REFERENCE.MONEY_CHECKING_ACCOUNT', 'yesNo'),
    specialAccountTranche: new FilterField('REFERENCE.JN_ACCOUNT_TRANCHE', 'yesNo'),
    status: new FilterField('GENERAL.STATUS', 'status'),
  }
}
