import { Component } from '@angular/core';
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {ManagementTypesFormComponent} from "./actions/management.types.form/management.types.form.component";
import {BasicReferencePage} from "../../basic.reference.page";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

@Component({
  template: basicTemplate(),
})
export class ManagementTypesComponent extends BasicReferencePage{
  columnDefs: ColDef[] = [
    {
      field: 'id',
      headerName: 'GENERAL.CODE',
      flex: 3
    },
    {
      field: 'nameUz',
      headerName: 'GENERAL.NAME',
    },
    {
      field: 'status',
      headerName: 'GENERAL.STATUS',
      type: 'status',
      flex: 3
    },
  ];

  title = 'MENU.REFERENCE.GENERAL_GUIDES.MANAGEMENT_TYPES';
  request = new ReferenceListRequest(ReferenceApiUrls.MANAGEMENT_TYPES);

  addUpdate(id = null) {
    FormModalComponent.showModal(ManagementTypesFormComponent, this.title, id, SizeModal.sm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
}
