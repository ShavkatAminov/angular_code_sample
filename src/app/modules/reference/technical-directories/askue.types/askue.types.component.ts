import { Component } from '@angular/core';
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {AskueTypesFormComponent} from "./actions/askue.types.form/askue.types.form.component";
import {BasicReferencePage} from "../../basic.reference.page";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

@Component({
  template: basicTemplate(),
})
export class AskueTypesComponent extends BasicReferencePage {
  ngOnInit(): void {
    this.defaultColumnDef['minWidth'] = 150
  }
  title = 'MENU.REFERENCE.TECHNICAL_GUIDES.DIRECTORY_OF_ASKUE_TYPES';
  request = new ReferenceListRequest(ReferenceApiUrls.ASKUE_TYPES)
  addUpdate(id = null){
    FormModalComponent.showModal(AskueTypesFormComponent,this.title,id, SizeModal.xsm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
  columnDefs: ColDef[] = [
    { field: 'id', headerName: 'GENERAL.NUMBER', flex: 2},
    { field: 'nameUz',  headerName:"REFERENCE.TYPE_NAME"},
    { field: 'status', headerName: 'GENERAL.STATUS',type:'status', flex: 3},
    { field: 'updatedAt', headerName: 'GENERAL.UPDATED_AT',type:'date', flex: 3},
    { field: 'updatedByName', headerName: 'GENERAL.UPDATED_BY', flex: 3, type: 'user'},
  ];
}
