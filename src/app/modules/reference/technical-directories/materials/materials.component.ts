import { Component } from '@angular/core';
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import { MaterialsFormComponent} from "./actions/materials.form/materials.form.component";
import {BasicReferencePage} from "../../basic.reference.page";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";
import {HttpClientService} from "@shared/helpers/service/http/http.client.service";
import {TranslocoService} from "@ngneat/transloco";
import {AlertServiceComponent} from "@shared/helpers/alerts/services/alert.service.component";
import {AuthService} from "@app/core/auth/auth.service";

@Component({
  template: basicTemplate(`
    <het-button [label]="'GENERAL.CHANGE_PROTOCOL'"></het-button>
    <het-select [options]="printOptions"  ></het-select>
    <het-button [label]="'GENERAL.PRINT'"></het-button>
  `),
})
export class MaterialsComponent extends BasicReferencePage {
    constructor( protected  http:HttpClientService,protected translate:TranslocoService,alert:AlertServiceComponent,auth: AuthService) {
            super(http,alert,auth)
    }

    columnDefs: ColDef[] = [
        {
            field: 'id',
            headerName:"REFERENCE.MATERIAL_CODE",
        },

        {
            field: 'nameUz',
            headerName:"REFERENCE.TRANSFORMER_TYPE_NAME",
        },
        {
            field: 'sectionMm2',
            headerName:"REFERENCE.SECTION_MM2",
            headerComponentParams:{
                template:`<h1>${ this.translate.translate('REFERENCE.SECTION') } (мм<sup>2</sup>)</h1> `
            }
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
