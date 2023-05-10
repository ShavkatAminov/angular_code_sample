import { Component } from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {LegalReportStatusesFormComponent} from "./actions/legal.report.statuses.form/legal.report.statuses.form.component";
import {AccountingSettlementLCApiUrls} from "../../../accounting-settlement-lc/accountingSettlementLCApiUrls";
import {AccountingSettlementLCListRequest} from "../../../accounting-settlement-lc/basic/AccountingSettlementLCListRequest";
import {basicTemplate} from "../../basic/basicTemplate";

@Component({
  template: basicTemplate(),
})
export class LegalReportStatusesComponent extends BasicReferencePage  {
  columnDefs: ColDef[] = [
    {
      headerName: 'GENERAL.CODE',
      field: 'code',
      flex: 2,
      minWidth: 100
    },
    {
      headerName: 'GENERAL.NAME',
      field: 'nameUz',
      flex: 15,
      minWidth: 150
    },
    {
      headerName: 'REFERENCE.REPORT_STATUS',
      field: 'status',
      type: 'status',
      flex: 4,
      minWidth: 100
    },
  ];

  title = 'MENU.REFERENCE.TECHNICAL_GUIDES.LEGAL_REPORT_STATUSES';
  request = new AccountingSettlementLCListRequest(AccountingSettlementLCApiUrls.LEGAL_REPORT_STATUSES);

  addUpdate(id = null) {
    FormModalComponent.showModal(LegalReportStatusesFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
}
