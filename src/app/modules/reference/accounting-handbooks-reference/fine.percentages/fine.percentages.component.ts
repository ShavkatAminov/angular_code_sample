import { Component } from '@angular/core';
import {basicTemplate} from "@app/modules/reference/basic/basicTemplate";
import {BasicReferencePage} from "@app/modules/reference/basic.reference.page";
import {ColDef} from "ag-grid-community";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {
  FinePercentagesFormComponent
} from "@app/modules/reference/accounting-handbooks-reference/fine.percentages/actions/fine.percentages.form/fine.percentages.form.component";
import {AccountingSettlementLCApiUrls} from "@app/modules/accounting-settlement-lc/accountingSettlementLCApiUrls";
import {
  AccountingSettlementLCListRequest
} from "@app/modules/accounting-settlement-lc/basic/AccountingSettlementLCListRequest";

@Component({
  template: basicTemplate(),
})
export class FinePercentagesComponent extends BasicReferencePage{
  ngOnInit(): void {
    this.defaultColumnDef['minWidth'] = 150
  }
  columnDefs: ColDef[] = [
    {
      field: 'percentage',
      headerName: 'REFERENCE.PERCENTAGE',
      flex: 2
    },
    {
      field: 'status',
      headerName: 'GENERAL.STATUS',
      flex: 2,
      type: 'status'
    },
    {
      field: 'createdAt',
      headerName: 'GENERAL.CREATED_AT',
      flex: 2,
      type: 'date'
    },
    {
      type: 'user',
      field: 'createdByName',
      headerName: 'GENERAL.CREATED_BY',
      flex: 2,
    },
  ];

  title = 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.FINE_PERCENTAGES';
  request = new AccountingSettlementLCListRequest(AccountingSettlementLCApiUrls.FINE_PERCENTAGES);

  addUpdate(id = null) {
    FormModalComponent.showModal(FinePercentagesFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
      if (res)
        this.reload();
    });
  }
}
