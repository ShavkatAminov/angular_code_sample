import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {ManagementLevelsFormComponent} from "./actions/management.levels.form/management.levels.form.component";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {BasicReferencePage} from "../../basic.reference.page";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

@Component({
  template: basicTemplate(),
})
export class ManagementLevelsComponent extends BasicReferencePage {
  columnDefs: ColDef[] = [
      { field: 'id', flex: 2, headerName: 'GENERAL.NUMBER',},
      { field: 'nameUz', headerName: 'GENERAL.NAME',},
      { field: 'status', flex: 2,  type: 'status', headerName: 'GENERAL.STATUS'},
  ];

  title = 'MENU.REFERENCE.GENERAL_GUIDES.MANAGEMENT_LEVELS';
  request = new ReferenceListRequest(ReferenceApiUrls.MANAGEMENT_LEVELS);

  addUpdate(id = null) {
    FormModalComponent.showModal(ManagementLevelsFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
}
