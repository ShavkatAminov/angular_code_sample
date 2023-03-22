import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {BasicTariffCoefficientsFormComponent} from "./actions/basic.tariff.coefficients.form/basic.tariff.coefficients.form.component";
import {BasicReferencePage} from "../../basic.reference.page";
import { SizeModal} from "@shared/helpers/modal/modal.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';

@Component({
  template: basicTemplate(),
})
export class BasicTariffCoefficientsComponent extends BasicReferencePage {
  columnDefs: ColDef[] = [
      {field: 'code', maxWidth: 126, headerName: 'GENERAL.CODE',},
      {field: 'nameUz', headerName: 'GENERAL.NAME',},
      {field: 'meaning', headerName: 'REFERENCE.MEANING',},
      {field: 'status', type: 'status', maxWidth: 204, headerName: 'GENERAL.STATUS',
          floatingFilterComponentParams: {
              type: 'status',
          },
      },
      {field: 'createdAt', type: 'date', headerName: 'GENERAL.CREATED_AT',
          floatingFilter: false,
          filter: false,
      },
      {field: 'createdBy', headerName: 'GENERAL.CREATED_BY',
          floatingFilter: false,
          filter: false,
      },
  ];

  title = 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.COEFFICIENTS_TO_BASIC_TARIFFS';
  request = new ReferenceListRequest(ReferenceApiUrls.BASIC_TARIFF_COEFFICIENTS);

  addUpdate(id = null) {
      FormModalComponent.showModal(BasicTariffCoefficientsFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
  override filter: FilterFieldGroup = {
    nameUz: new FilterField('GENERAL.NAME', 'input'),
    code: new FilterField('GENERAL.CODE', 'input'),
    status: new FilterField('GENERAL.STATUS', 'status'),
    meaning: new FilterField('REFERENCE.MEANING', 'input'),
  }
}
