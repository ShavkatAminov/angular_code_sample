import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {CoatoBranchesFormComponent} from "./actions/coato.branches.form/coato.branches.form.component";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";

@Component({
  template: basicTemplate(),
})
export class CoatoBranchesComponent extends BasicReferencePage {
  columnDefs: ColDef[] = [
      {
          field: 'code',
          headerName: 'GENERAL.CODE',
          flex: 4
      },
      {
          field: 'nameUz',
          headerName: "REFERENCE.NAME_CATO"
      },
      {
          colId: 'districtId',
          floatingFilterComponentParams: {
              type: 'autocomplete',
              request: new ReferenceDropDownRequest(ReferenceApiUrls.DISTRICTS),
          },
          field: 'districts.nameUz',
          headerName: "GENERAL.DISTRICT"
      },
      {
          floatingFilterComponentParams: {
              type: 'status',
          },
          field: 'status',
          headerName: 'GENERAL.STATUS',
          type: 'status',
          flex: 4
      },
  ];

  title = 'MENU.REFERENCE.GENERAL_GUIDES.DIRECTORY_COATO';
  request = new ReferenceListRequest(ReferenceApiUrls.COATO_BRANCHES);

  addUpdate(id = null) {
    FormModalComponent.showModal(CoatoBranchesFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
  override filter: FilterFieldGroup = {
    code: new FilterField('GENERAL.CODE', 'input'),
    nameUz: new FilterField('REFERENCE.NAME_CATO', 'input'),
    districtId: new FilterField('GENERAL.DISTRICT', 'autocomplete', new ReferenceDropDownRequest(ReferenceApiUrls.DISTRICTS)),
    status: new FilterField('GENERAL.STATUS', 'status'),
  }
}
