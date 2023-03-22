import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {IndicationTypesFormComponent} from "./actions/indication.types.form/indication.types.form.component";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";
import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';

@Component({
  template: basicTemplate(),
})
export class IndicationTypesComponent extends BasicReferencePage {
  columnDefs: ColDef[] = [
      {
          field: 'code',
          headerName: 'GENERAL.CODE',
          flex: 2
      },
      {
          field: 'nameUz',
          headerName: "GENERAL.NAME"
      },
      {
          floatingFilterComponentParams: {
            type: 'status',
          },
          field: 'status',
          headerName: 'GENERAL.STATUS',
          type: 'status',
          flex: 2
      },
  ];

  title = 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.TYPE_INDICATION';
  request = new ReferenceListRequest(ReferenceApiUrls.INDICATION_TYPES);

  addUpdate(id = null) {
      FormModalComponent.showModal(IndicationTypesFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
  override filter: FilterFieldGroup = {
    nameUz: new FilterField('status', 'input'),
    code: new FilterField('GENERAL.CODE', 'input'),
    status: new FilterField('GENERAL.STATUS', 'status'),
  }
}
