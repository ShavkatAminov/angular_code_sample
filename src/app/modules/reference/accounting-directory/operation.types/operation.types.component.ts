import { Component } from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {OperationTypesFormComponent} from "./actions/operation.types.form/operation.types.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

@Component({
  template: basicTemplate(),
})
export class OperationTypesComponent extends BasicReferencePage{
  columnDefs: ColDef[] = [
    {
      field: 'code',
      headerName: 'REFERENCE.OPERATION_CODE',
      resizable: true,
      flex: 5
    },
    {
      field: 'nameUz',
      headerName: 'GENERAL.NAME',
      flex: 12
    },
    {
      field: 'debitAccountCode',
      headerName: 'REFERENCE.DEBIT_ACCOUNT_CODE',
      flex: 5
    },
    {
      field: 'creditAccountCode',
      headerName: 'REFERENCE.CREDIT_ACCOUNT_CODE',
      flex: 5
    },
    {
      field: 'status',
      headerName: 'GENERAL.STATUS',
      type: 'status',
      flex: 5
    },
  ];


  request = new ReferenceListRequest(ReferenceApiUrls.OPERATION_TYPES);
  title = 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.DIRECTORY_OF_OPERATION_TYPES';
  addUpdate(id = null) {
    FormModalComponent.showModal(OperationTypesFormComponent, this.title, id, SizeModal.sm).subscribe(res => {
      if (res)
        this.reload();
    });
  }
}
