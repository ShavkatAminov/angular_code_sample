import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "@app/modules/reference/referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {BasicReferencePage} from "@app/modules/reference/basic.reference.page";
import {basicTemplate} from "@app/modules/reference/basic/basicTemplate";
import {NewPersonalAccountRangeFormComponent} from "./actions/new.personal.account.range.form/new.personal.account.range.form.component";

@Component({
    template: basicTemplate(),
})
export class NewPersonalAccountRangeComponent extends BasicReferencePage {

  columnDefs: ColDef[] = [
      {
        flex: 4,
        field: 'id',
        headerName: 'GENERAL.ID',
      },
      {
        field: 'accountRangeFrom',
        headerName: 'ACCOUNTING_SETTLEMENT_HC.COUNTING_RANGE_FROM',
      },
      {
        field: 'accountRangeTo',
        headerName: 'ACCOUNTING_SETTLEMENT_HC.ACCOUNT_RANGE_UP_TO',
      },
      {
        colId: 'coatoBranchName',
        field: 'coatoBranch.nameUz',
        headerName: 'ACCOUNTING_SETTLEMENT_HC.COATO_BRANCH_ID',
      },
      {
        colId: 'consumerActivityTypeName',
        field: 'consumerActivityType.nameUz',
        headerName: 'ACCOUNTING_SETTLEMENT_HC.TYPE_OF_CONSUMER_ACTIVITY',
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
