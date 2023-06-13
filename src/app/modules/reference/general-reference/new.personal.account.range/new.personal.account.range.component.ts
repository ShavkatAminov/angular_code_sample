import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "@app/modules/reference/referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {BasicReferencePage} from "@app/modules/reference/basic.reference.page";
import {basicTemplate} from "@app/modules/reference/basic/basicTemplate";
import {NewPersonalAccountRangeFormComponent} from "./actions/new.personal.account.range.form/new.personal.account.range.form.component";
import {ReferenceDropDownRequest} from "@app/modules/reference/basic/ReferenceDropDownRequest";

@Component({
    template: basicTemplate(),
})
export class NewPersonalAccountRangeComponent extends BasicReferencePage {

  columnDefs: ColDef[] = [
      {
        flex: 4,
        field: 'id',
        headerName: 'ACCOUNTING_SETTLEMENT_LC.CODE_PEC',
      },
      {
        flex: 12,
        colId: 'coatoBranchName',
        field: 'coatoBranch.nameUz',
        headerName: 'ACCOUNTING_SETTLEMENT_LC.NAME_PEC',
      },
      {
        flex: 5,
          floatingFilterComponentParams: {
              type: 'autocomplete',
              request: new ReferenceDropDownRequest(ReferenceApiUrls.CONSUMER_TYPE),
          },
        colId: 'consumerTypeId',
        field: 'consumerType.nameUz',
        headerName: 'ACCOUNTING_SETTLEMENT_LC.OBJECT_NAME',
      },
      {
          flex: 4,
          field: 'accountRangeFrom',
          headerName: 'ACCOUNTING_SETTLEMENT_HC.COUNTING_RANGE_FROM',
      },
      {
          flex: 4,
          field: 'accountRangeTo',
          headerName: 'ACCOUNTING_SETTLEMENT_HC.ACCOUNT_RANGE_UP_TO',
      },
  ];

  title = 'MENU.REFERENCE.GENERAL_GUIDES.NEW_PERSONAL_ACCOUNT_RANGE';
  request = new ReferenceListRequest(ReferenceApiUrls.NEW_PERSONAL_ACCOUNT_RANGE);

  addUpdate(id = null) {
    FormModalComponent.showModal(NewPersonalAccountRangeFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
      if(res)
        this.reload();
    });
  }

}
