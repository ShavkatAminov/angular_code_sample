import { Component } from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {basicTemplate} from "../../basic/basicTemplate";
import {EnterpriseByPaymentTypesFormComponent} from "@app/modules/reference/general-reference/enterprise.by.payment.types/actions/enterprise.by.payment.types.form/enterprise.by.payment.types.form.component";

@Component({
  template: basicTemplate(),
})
export class EnterpriseByPaymentTypesComponent extends BasicReferencePage{
  columnDefs: ColDef[] = [
    {
      flex:3,
      field: 'code',
      headerName: 'GENERAL.CODE',
    },
    {
      flex: 6,
      field: 'shortName',
      headerName: 'MENU.REFERENCE.GENERAL_GUIDES.ABBREVIATED_NAME',
    },
    {
      field: 'fullName',
      headerName: 'ACCOUNTING_SETTLEMENT_LC.FULL_NAME_DIC',
    },
    {
      flex: 5,
      type: 'status',
      field: 'status',
      headerName: 'GENERAL.STATUS',
    }
  ];

  title = 'MENU.REFERENCE.GENERAL_GUIDES.DIRECTORY_ENTERPRISE_GROUP_BY_TYPES_OF_PAYMENTS';
  request = new ReferenceListRequest(ReferenceApiUrls.ENTERPRISE_BY_PAYMENT_TYPES);

  addUpdate(id = null) {
    FormModalComponent.showModal(EnterpriseByPaymentTypesFormComponent, this.title, id, SizeModal.sm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
}
