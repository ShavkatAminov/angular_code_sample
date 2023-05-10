import { Component } from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import { SizeModal} from "@shared/helpers/modal/modal.component";
import {AccountDirectoryFormComponent} from "./actions/account.directory.form/account.directory.form.component";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";


@Component({
  template: basicTemplate(`
    <het-select [options]="printOptions" value="HTML" ></het-select>
    <het-button [label]="'GENERAL.PRINT'"></het-button>
  `),
})
export class AccountDirectoryComponent extends BasicReferencePage{
  columnDefs: ColDef[] = [
    {
      field: 'account',
      headerName: 'REFERENCE.ACCOUNT',
      flex:4
    },
    {
      field: 'nameUz',
      headerName: 'GENERAL.NAME',
      flex:10
    },
    {
      colId: 'accountGroupId',
      floatingFilterComponentParams: {
        type: 'autocomplete',
        request: new ReferenceDropDownRequest(ReferenceApiUrls.ACCOUNT_GROUP),
      },
      field: 'accountGroup.nameUz',
      headerName: 'REFERENCE.ACCOUNT_GROUP',
      flex:10
    },
    {
      colId: 'currencyTypeId',
      floatingFilterComponentParams: {
        type: 'autocomplete',
        request: new ReferenceDropDownRequest(ReferenceApiUrls.CURRENCY_TYPE),
      },
      field: 'currencyType.nameUz',
      headerName: 'REFERENCE.CURRENCY_TYPE',
      flex: 10
    },
    {
      field: 'status',
      type: 'status',
      headerName: 'GENERAL.STATUS',
      flex: 5
    },
  ];

  request = new ReferenceListRequest(ReferenceApiUrls.ACCOUNT_DIRECTORY);


  title = 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.ACCOUNT_DIRECTORY';
  addUpdate(id = null) {
    FormModalComponent.showModal(AccountDirectoryFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
      if (res)
        this.reload();
    });
  }
}
