import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {ConsumptionGroupsFormComponent} from "./actions/consumption.groups.form/consumption.groups.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

@Component({
  template: basicTemplate(),
})
export class ConsumptionGroupsComponent extends BasicReferencePage{

  columnDefs: ColDef[] = [
    {
      field: 'code',
      headerName: 'GENERAL.CODE',
    },
    {
      flex: 20,
      field: 'nameUz',
      headerName: 'GENERAL.NAMING_CONSUMPTION_GROUPS_BY_CODES',
    },
    {
      field: 'status',
      headerName: 'GENERAL.STATUS',
      type: 'status'
    }
  ];

  title = 'MENU.REFERENCE.GENERAL_GUIDES.CONSUMPTION_GROUP_GUIDE_BY_CODES';
  request = new ReferenceListRequest(ReferenceApiUrls.CONSUMPTION_GROUPS);

  addUpdate(id = null) {
    FormModalComponent.showModal(ConsumptionGroupsFormComponent, this.title, id, SizeModal.sm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
}
