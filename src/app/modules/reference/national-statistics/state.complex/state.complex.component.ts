import { Component } from '@angular/core';
import {ColDef} from "ag-grid-community";
import {BasicReferencePage} from "../../basic.reference.page";
import {SizeModal} from "../../../../shared/helpers/modal/modal.component";
import {DirectoryOfComplexesFormComponent} from "./actions/directory.of.complexes.form/directory.of.complexes.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "../../../../shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';

@Component({
  template: basicTemplate(),
})

export class StateComplexComponent extends BasicReferencePage{
  columnDefs: ColDef[] = [
    {
      field: 'code',
      headerName: 'GENERAL.CODE',
    },
    {
      field: 'nameUz',
      headerName: 'GENERAL.NAME',
    },
    {
      field: 'budgetCode',
      headerName: 'GENERAL.BUDGET_CODE',
    },
    {
      floatingFilterComponentParams: {
        type: 'status',
      },
      field: 'status',
      type: 'status',
      headerName: 'GENERAL.STATUS',
    },
    {
      floatingFilterComponentParams: {
        type: 'date',
      },
      field: 'updatedAt',
      type: 'date',
      headerName: 'GENERAL.UPDATED_AT',
    },
    {
      field: 'login',
      headerName: 'GENERAL.LOGIN',
    },
  ];

  title = 'MENU.REFERENCE.NATIONAL_STATISTICS_HANDBOOKS.DIRECTORY_OF_COMPLEXES';
  request = new ReferenceListRequest(ReferenceApiUrls.STATE_COMPLEX);

  addUpdate(id = null) {
    FormModalComponent.showModal(DirectoryOfComplexesFormComponent, this.title, id, SizeModal.sm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
  override filter: FilterFieldGroup = {
    code: new FilterField('GENERAL.CODE', 'input'),
    nameUz: new FilterField('GENERAL.NAME', 'input'),
    budgetCode: new FilterField('GENERAL.BUDGET_CODE', 'input'),
    status: new FilterField('GENERAL.STATUS', 'status'),
  }
}
