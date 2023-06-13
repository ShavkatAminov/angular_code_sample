import { Component } from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {ColDef} from "ag-grid-community";
import {DistrictsFormComponent} from "./actions/districts.form/districts.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";

@Component({
  template: basicTemplate(),
})
export class DistrictsComponent extends BasicReferencePage{
  title = 'MENU.REFERENCE.GENERAL_GUIDES.DISTRICTS';
  request = new ReferenceListRequest(ReferenceApiUrls.DISTRICTS)

  addUpdate(id = null) {
    FormModalComponent.showModal(DistrictsFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
      if (res)
        this.reload();
    });
  }








  columnDefs: ColDef[] = [
    {field: 'code', maxWidth: 204, headerName: 'GENERAL.CODE'},
    {field: 'nameUz', headerName: 'GENERAL.NAME'},
    {
      colId: 'regionId',
      floatingFilterComponentParams: {
        type: 'autocomplete',
        request: new ReferenceDropDownRequest(ReferenceApiUrls.REGIONS),
      },
      field: 'regions.nameUz', headerName: 'GENERAL.REGION'},
    {field: 'status',  maxWidth: 204, headerName: 'GENERAL.STATUS', type: 'status'},
  ];
}
