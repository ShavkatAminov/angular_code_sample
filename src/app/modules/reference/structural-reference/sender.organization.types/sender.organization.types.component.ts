import { Component } from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {
  SenderOrganizatonTypesFormComponent
} from "./actions/sender.organizaton.types.form/sender.organizaton.types.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

@Component({
  template: basicTemplate(),
})
export class SenderOrganizationTypesComponent extends BasicReferencePage{
  columnDefs: ColDef[] = [
    {
      field: 'code',
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
      flex: 3,
      type: 'status',
    }
  ];

  title = 'MENU.REFERENCE.STRUCTURAL_GUIDES.SENDER_ORGANIZATION_TYPES';
  request = new ReferenceListRequest(ReferenceApiUrls.SENDER_ORGANIZATION_TYPES);

  addUpdate(id = null) {
    FormModalComponent.showModal(SenderOrganizatonTypesFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
}
