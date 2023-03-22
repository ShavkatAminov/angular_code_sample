import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {StreetsDirectoryFormComponent} from "./actions/streets.directory.form/streets.directory.form.component";
import {BasicReferencePage} from "../../basic.reference.page";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";

import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";

@Component({
  template: basicTemplate(),
})
export class StreetsDirectoryComponent extends BasicReferencePage {
  columnDefs: ColDef[] = [
      {field: 'code', flex: 2, headerName: 'GENERAL.CODE'},
      {field: 'nameUz', headerName: 'GENERAL.NAME'},
      {
        floatingFilterComponentParams: {
          type: 'status',
        },
        field: 'status', type: 'status', flex: 2, headerName: 'GENERAL.STATUS'},
      {
        colId: 'habitationDivisionId',
        floatingFilterComponentParams: {
          type: 'autocomplete',
          request: new ReferenceDropDownRequest(ReferenceApiUrls.HABITATION_DIVISIONS),
        },
        field: 'habitationDivision.nameUz', flex: 2, headerName: 'ACCOUNTING_SETTLEMENT_HC.HABIBATION_DIVISION'},
  ];

  title = 'MENU.REFERENCE.STRUCTURAL_GUIDES.STREETS_DIRECTORY';
  request = new ReferenceListRequest(ReferenceApiUrls.STREETS_DIRECTORY);

  addUpdate(id = null) {
    FormModalComponent.showModal(StreetsDirectoryFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
  override filter: FilterFieldGroup = {
    nameUz: new FilterField('GENERAL.NAME', 'input'),
    code: new FilterField('GENERAL.CODE', 'input'),
    status: new FilterField('GENERAL.STATUS', 'status'),
    habitationDivisionId: new FilterField('ACCOUNTING_SETTLEMENT_HC.HABIBATION_DIVISION', 'autocomplete',
        new ReferenceDropDownRequest(ReferenceApiUrls.HABITATION_DIVISIONS)),
  }
}
