import { Component } from '@angular/core';
import {ColDef} from "ag-grid-community";
import {BasicReferencePage} from "../../basic.reference.page";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {RegionsFormComponent} from "./actions/regions.form/regions.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

@Component({
  template: basicTemplate(),
})
export class RegionsComponent extends BasicReferencePage{
  columnDefs: ColDef[] = [
    {field: 'code', maxWidth: 204, headerName: 'GENERAL.CODE'},
    {field: 'nameUz', headerName: 'GENERAL.NAME'},
    {field: 'status',  maxWidth: 204, headerName: 'GENERAL.STATUS', type: 'status'},
  ];
  title = 'MENU.REFERENCE.GENERAL_GUIDES.REGIONS';
  request = new ReferenceListRequest(ReferenceApiUrls.REGIONS);

  addUpdate(id = null) {
    FormModalComponent.showModal(RegionsFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
      if (res)
        this.reload();
    });
  }
}
