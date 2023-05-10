import { Component } from '@angular/core';
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import { MaterialsFormComponent} from "./actions/materials.form/materials.form.component";
import {BasicReferencePage} from "../../basic.reference.page";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

@Component({
  template: basicTemplate(),
})
export class MaterialsComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {
            field: 'nameUz',
            headerName:"REFERENCE.TRANSFORMER_TYPE_NAME",
        },
        {
            field: 'sectionMm2',
            headerName:"REFERENCE.SECTION_MM2",
        },
        {
            field: 'resistance',
            headerName: 'REFERENCE.RESISTANCE_OHM_KM',
        },
        {
            type: 'status',
            field: 'status',
            headerName: 'GENERAL.STATUS',
            flex: 5
        }
    ];

  title = 'MENU.REFERENCE.TECHNICAL_GUIDES.MATERIALS';
 request = new ReferenceListRequest(ReferenceApiUrls.MATERIALS)
  addUpdate(id = null){
    FormModalComponent.showModal(MaterialsFormComponent,this.title,id, SizeModal.xsm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
}
