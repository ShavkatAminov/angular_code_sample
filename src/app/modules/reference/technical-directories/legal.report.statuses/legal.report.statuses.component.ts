import { Component } from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';
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
      headerName: 'ACCOUNTING_SETTLEMENT_HC.CONSUMER_CODE',
      field: 'code',
      flex: 6,
      minWidth: 100
    },
    {
      headerName: 'ACCOUNTING_SETTLEMENT_HC.CONSUMER_USERNAME',
      field: 'nameUz',
      flex: 15,
      minWidth: 150
    },
    {
      headerName: 'GENERAL.REPORT_DATE',
      field: '',
      type: 'date',
      flex: 5,
      minWidth: 120
    },
    {
      floatingFilterComponentParams: {
        type: 'status',
      },
      headerName: 'ACCOUNTING_SETTLEMENT_LC.REPORT_STATUS',
      field: 'status',
      type: 'status',
      flex: 6,
      minWidth: 100
    },
    {
      headerName: 'Состояние потребителя',
      field: '',
      flex: 7,
      minWidth: 100
    },
    {
      headerName: 'Причина',
      field: '',
      flex: 7,
      minWidth: 100
    },
    {
      headerName: 'Источник',
      field: '',
      flex: 7,
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

  override filter: FilterFieldGroup = {
    nameUz: new FilterField('ACCOUNTING_SETTLEMENT_LC.FIELD_CODE', 'input'),
    code: new FilterField('ACCOUNTING_SETTLEMENT_LC.FIELD_NAME', 'input'),
    status: new FilterField('GENERAL.REPORT_DATE', 'input'),
  }
}
