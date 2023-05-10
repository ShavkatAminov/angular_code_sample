import { Component } from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {ColDef} from "ag-grid-community";
import {OrcAgentsFormComponent} from "./actions/orc.agents.form/orc.agents.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

@Component({
  template: basicTemplate(),
})
export class OrcAgentsComponent extends BasicReferencePage {
  title = 'MENU.REFERENCE.STRUCTURAL_GUIDES.ORC_AGENTS';
  request = new ReferenceListRequest(ReferenceApiUrls.ORC_AGENT)

  addUpdate(id = null) {
    FormModalComponent.showModal(OrcAgentsFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
      if (res)
        this.reload();
    });
  }
    columnDefs: ColDef[] = [
      {flex:4, field: 'coatoCode', headerName: 'REFERENCE.COATO_CODE'},
      {flex:4, field: 'code', headerName: "REFERENCE.AGENT_CODE"},
      {colId: 'fullName', flex:10, valueGetter: "data.firstName + ' ' + data.lastName + ' ' + data.middleName", headerName: 'GENERAL.FULL_NAME'},
      {flex:10, field: 'mobilePhone', headerName: 'GENERAL.MOBILE_PHONE'},
      {flex:4, field: 'status', headerName: 'GENERAL.STATUS',type: 'status'},
    ];
}
