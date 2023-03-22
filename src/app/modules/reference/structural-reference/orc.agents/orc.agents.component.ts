import { Component } from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {ColDef} from "ag-grid-community";
import {OrcAgentsFormComponent} from "./actions/orc.agents.form/orc.agents.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';

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
      {flex:3, field: 'coatoCode', headerName: 'REFERENCE.COATO_CODE'},
      {flex:3, field: 'code', headerName: "REFERENCE.AGENT_CODE"},
      {colId: 'firstName', flex:10, valueGetter: "data.firstName + ' ' + data.lastName + ' ' + data.middleName", headerName: 'GENERAL.FULL_NAME'},
      {flex:10, field: 'mobilePhone', headerName: 'GENERAL.MOBILE_PHONE'},
      {
        floatingFilterComponentParams: {
          type: 'status',
        },
        flex:3, field: 'status', headerName: 'GENERAL.STATUS',type: 'status',},
    ];
  override filter: FilterFieldGroup = {
    coatoCode: new FilterField('REFERENCE.COATO_CODE', 'input'),
    code: new FilterField('REFERENCE.AGENT_CODE', 'input'),
    firstName: new FilterField('GENERAL.FIRST_NAME', 'input'),
    lastName: new FilterField('GENERAL.LAST_NAME', 'input'),
    middleName: new FilterField('GENERAL.MIDDLE_NAME', 'input'),
    mobilePhone: new FilterField('GENERAL.MOBILE_PHONE', 'input'),
    status: new FilterField('GENERAL.STATUS', 'status'),
  }
}
