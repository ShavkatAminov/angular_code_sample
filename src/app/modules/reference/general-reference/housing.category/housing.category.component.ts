import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {HousingCategoryFormComponent} from "./actions/housing.category.form/housing.category.form.component";
import {BasicReferencePage} from "../../basic.reference.page";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

@Component({
  template: basicTemplate(),
})
export class HousingCategoryComponent extends BasicReferencePage {
  columnDefs: ColDef[] = [
      {field: 'code', flex: 1, headerName: 'GENERAL.CODE'},
      {field: 'nameUz', headerName: 'REFERENCE.NAME_OF_HOUSING_CATEGORY'},
      {field: 'status', type: 'status', flex: 2, headerName: 'GENERAL.STATUS'},
  ];

  title = 'MENU.REFERENCE.GENERAL_GUIDES.DIRECTORY_OF_HOUSING_CATEGORIES';

  request = new ReferenceListRequest(ReferenceApiUrls.HOUSING_CATEGORY);

  addUpdate(id = null) {
    FormModalComponent.showModal(HousingCategoryFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
}
