import { Component } from '@angular/core';
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {LanguagesFormComponent} from "./actions/languages.form/languages.form.component";
import {BasicReferencePage} from "../../basic.reference.page";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

@Component({
  template: basicTemplate(),
})
export class LanguagesComponent extends BasicReferencePage {

  title = 'MENU.REFERENCE.GENERAL_GUIDES.DIRECTORY_LANGUAGE';
  request = new ReferenceListRequest(ReferenceApiUrls.LANGUAGES)
  addUpdate(id = null){
    FormModalComponent.showModal(LanguagesFormComponent,this.title,id, SizeModal.xsm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
  columnDefs: ColDef[] = [
    { field: 'id', headerName: 'GENERAL.NUMBER', flex:3 },
    { field: 'code', headerName: 'GENERAL.CODE', flex:3},
    { field: 'nameUz',  headerName: "REFERENCE.TYPE_NAME"},
    { field: 'status', headerName: 'GENERAL.STATUS',type:'status', flex:3},
  ];
}
