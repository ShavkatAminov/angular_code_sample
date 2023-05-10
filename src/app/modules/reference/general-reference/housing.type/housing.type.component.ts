import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import { BasicReferencePage } from '../../basic.reference.page';
import {HousingTypeFormComponent} from "./actions/housing.type.form/housing.type.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

@Component({
  template: basicTemplate(),
})
export class HousingTypeComponent extends BasicReferencePage {
  columnDefs: ColDef[] = [
      {field: 'code', flex: 1, headerName: 'GENERAL.CODE'},
      {field: 'nameUz', headerName: 'REFERENCE.NAME_OF_TYPE_HOUSING'},
      {field: 'status', type: 'status', flex: 2, headerName: 'GENERAL.STATUS'},
  ];

  title = 'MENU.REFERENCE.GENERAL_GUIDES.DIRECTORY_OF_HOUSING_TYPES';
  request = new ReferenceListRequest(ReferenceApiUrls.HOUSING_TYPE);

  addUpdate(id = null) {
    FormModalComponent.showModal(HousingTypeFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
}
