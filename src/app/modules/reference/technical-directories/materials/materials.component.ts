import { Component } from '@angular/core';
import {ColDef} from "ag-grid-community";
import {SizeModal} from "../../../../shared/helpers/modal/modal.component";
import { MaterialsFormComponent} from "./actions/materials.form/materials.form.component";
import {BasicReferencePage} from "../../basic.reference.page";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "../../../../shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";

@Component({
  template: basicTemplate(),
})
export class MaterialsComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {
            field: 'code',
            headerName: 'GENERAL.CODE',
        },
        {
            field: 'transformerType.nameUz',
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
            floatingFilterComponentParams: {
                type: 'status',
            },
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

  override filter: FilterFieldGroup = {
    code: new FilterField('GENERAL.CODE', 'input'),
    transformerTypeId: new FilterField('REFERENCE.TRANSFORMER_TYPE_NAME', 'autocomplete', new ReferenceDropDownRequest(ReferenceApiUrls.TRANSFORMER_TYPES)),
    sectionMm2: new FilterField('REFERENCE.SECTION_MM2', 'input'),
    resistance: new FilterField('REFERENCE.RESISTANCE_OHM_KM', 'input'),
    status: new FilterField('GENERAL.STATUS', 'status'),
  }
}
