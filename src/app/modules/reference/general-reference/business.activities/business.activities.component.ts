import { Component } from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {ColDef} from "ag-grid-community";
import {BusinessActivitiesFormComponent} from "./actions/business.activities.form/business.activities.form.component";
import {basicTemplate} from "../../basic/basicTemplate";
@Component({
  template: basicTemplate(),
})
export class BusinessActivitiesComponent extends BasicReferencePage{
  title = 'MENU.REFERENCE.GENERAL_GUIDES.BUSINESS_ACTIVITY';
  request = new ReferenceListRequest(ReferenceApiUrls.BUSINESS_ACTIVITY)

  addUpdate(id = null) {
    FormModalComponent.showModal(BusinessActivitiesFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
      if (res)
        this.reload();
    });
  }
  columnDefs: ColDef[] = [
    {field: 'code', flex:3, headerName: 'GENERAL.CODE'},
    {field: 'nameUz',flex:15, headerName: 'GENERAL.NAME'},
    {field: 'shortName', flex:8,headerName: 'REFERENCE.SHORT_NAME'},
    {field: 'status',  flex:3, headerName: 'GENERAL.STATUS', type: 'status'},
  ];
}
