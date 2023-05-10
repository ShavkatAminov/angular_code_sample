import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {BasicTariffCoefficientsFormComponent} from "./actions/basic.tariff.coefficients.form/basic.tariff.coefficients.form.component";
import {BasicReferencePage} from "../../basic.reference.page";
import { SizeModal} from "@shared/helpers/modal/modal.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

@Component({
  template: basicTemplate(),
})
export class BasicTariffCoefficientsComponent extends BasicReferencePage {
  columnDefs: ColDef[] = [
      {field: 'code', maxWidth: 126, headerName: 'GENERAL.CODE',},
      {field: 'nameUz', headerName: 'GENERAL.NAME',},
      {field: 'meaning', headerName: 'REFERENCE.VALUE',},
      {field: 'status', type: 'status', maxWidth: 204, headerName: 'GENERAL.STATUS',},
      {field: 'createdAt', type: 'date', headerName: 'GENERAL.CREATED_AT'},
      {field: 'createdByName', headerName: 'GENERAL.CREATED_BY', type: 'user'},
  ];

  title = 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.COEFFICIENTS_TO_BASIC_TARIFFS';
  request = new ReferenceListRequest(ReferenceApiUrls.BASIC_TARIFF_COEFFICIENTS);

  addUpdate(id = null) {
      FormModalComponent.showModal(BasicTariffCoefficientsFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
}
