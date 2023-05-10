import { Component } from '@angular/core';
import {ColDef} from "ag-grid-community";
import {BasicReferencePage} from "../../basic.reference.page";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {DirectoryOfComplexesFormComponent} from "./actions/directory.of.complexes.form/directory.of.complexes.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";
;

@Component({
  template: basicTemplate(`
    <het-button [label]="'GENERAL.CHANGE_PROTOCOL'"></het-button>
    <het-select [options]="printOptions" value="HTML" ></het-select>
    <het-button [label]="'GENERAL.PRINT'"></het-button>
  `),
})

export class StateComplexComponent extends BasicReferencePage{
  columnDefs: ColDef[] = [
    {
      field: 'code',
      headerName: 'REFERENCE.CODE_COMPLEX',
    },
    {
      field: 'nameUz',
      headerName: 'REFERENCE.NAME_COMPLEX',
    },
    {
      field: 'budgetCode',
      headerName: 'REFERENCE.BUDGET_CODE',
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
}
