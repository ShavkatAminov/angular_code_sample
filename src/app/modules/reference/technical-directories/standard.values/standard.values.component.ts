import { Component } from '@angular/core';
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {StandardValuesFormComponent} from "./actions/standard.values.form/standard.values.form.component";
import {BasicReferencePage} from "../../basic.reference.page";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

@Component({
  template: basicTemplate(),
})
export class StandardValuesComponent extends BasicReferencePage {
  ngOnInit(): void {
    this.defaultColumnDef['minWidth'] = 150
  }
  title = 'MENU.REFERENCE.TECHNICAL_GUIDES.DIRECTORY_OF_STANDARD_VALUES';
  request = new ReferenceListRequest(ReferenceApiUrls.STANDARD_VALUES)
  addUpdate(id = null){
    FormModalComponent.showModal(StandardValuesFormComponent,this.title,id, SizeModal.xsm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
  columnDefs: ColDef[] = [
    { field: 'id', colId:"id", headerName: 'GENERAL.NUMBER', flex:2 },
    { field: 'voltageLevelNetwork',  headerName:"REFERENCE.VOLTAGE_LEVEL_SET", flex:4},
    { field: 'value',  headerName: 'REFERENCE.VALUE', flex:3},
    { field:"createdAt",headerName: 'GENERAL.CREATED_AT', flex:3, type:"date"},
    { field:"createdByName", colId:"createdBy",headerName: 'GENERAL.CREATED_BY', type: 'user', flex:3},
    { field:"updatedAt",headerName: 'GENERAL.UPDATED_AT', flex:3, type:"date"},
    { field:"updatedByName", colId:"updatedBy",headerName: 'GENERAL.UPDATED_BY', type: 'user', flex:3},
    { field: 'status', headerName: 'GENERAL.STATUS', type:'status', flex:3 },
  ];
}
