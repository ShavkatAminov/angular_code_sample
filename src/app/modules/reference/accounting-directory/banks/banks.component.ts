import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import { SizeModal} from "@shared/helpers/modal/modal.component";
import {BanksFormComponent} from "./actions/banks.form/banks.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';

@Component({
  template: basicTemplate(),
})
export class BanksComponent extends BasicReferencePage{
  columnDefs: ColDef[] = [
    {
      field: 'code',
      headerName: 'GENERAL.CODE',
    },
    {
      flex: 20,
      field: 'nameUz',
      headerName: 'GENERAL.NAME',
    },
    {
      floatingFilterComponentParams: {
        type: 'status',
      },
      field: 'status',
      headerName: 'GENERAL.STATUS',
      type: 'status'
    },
    {
      floatingFilterComponentParams: {
        type: 'yesNo',
      },
      field: 'paymentRequirement',
      headerName: 'REFERENCE.BANK_PAYMENT_REQUESTS',
      type: 'yesNo'
    }
  ];

  title = 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.DIRECTORY_OF_BANKS';
  request = new ReferenceListRequest(ReferenceApiUrls.BANKS);

  addUpdate(id = null) {
    FormModalComponent.showModal(BanksFormComponent, this.title, id, SizeModal.sm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
  override filter: FilterFieldGroup = {
    nameUz: new FilterField('GENERAL.NAME', 'input'),
    code: new FilterField('GENERAL.CODE', 'input'),
    status: new FilterField('GENERAL.STATUS', 'status'),
    paymentRequirement: new FilterField('REFERENCE.BANK_PAYMENT_REQUESTS', 'status'),
  }
}
