import { Component } from '@angular/core';
import {ColDef} from "ag-grid-community";
import {SizeModal} from "../../../../shared/helpers/modal/modal.component";
import {AskueTypesFormComponent} from "./actions/askue.types.form/askue.types.form.component";
import {BasicReferencePage} from "../../basic.reference.page";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "../../../../shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';

@Component({
  template: basicTemplate(),
})
export class AskueTypesComponent extends BasicReferencePage {

  title = 'MENU.REFERENCE.TECHNICAL_GUIDES.DIRECTORY_OF_ASKUE_TYPES';
  request = new ReferenceListRequest(ReferenceApiUrls.ASKUE_TYPES)
  addUpdate(id = null){
    FormModalComponent.showModal(AskueTypesFormComponent,this.title,id, SizeModal.xsm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
  columnDefs: ColDef[] = [
    { field: 'id', headerName: 'GENERAL.NUMBER', flex:2 },
    { field: 'code', headerName: 'GENERAL.CODE', flex:2},
    { field: 'nameUz',  headerName:"REFERENCE.TYPE_NAME"},
    {
      floatingFilterComponentParams: {
        type: 'status',
      },
      field: 'status', headerName: 'GENERAL.STATUS',type:'status', flex:3},
    {
      floatingFilterComponentParams: {
        type: 'date',
      },
      field: 'updatedAt', headerName: 'GENERAL.UPDATED_AT',type:'date', flex:3},
    { field: 'updatedBy', headerName: 'GENERAL.UPDATED_BY', flex:3},
  ];
  override filter: FilterFieldGroup = {
    code: new FilterField('GENERAL.CODE', 'input'),
    nameUz: new FilterField('REFERENCE.TYPE_NAME', 'input'),
    status: new FilterField('GENERAL.STATUS', 'status'),
  }
}
