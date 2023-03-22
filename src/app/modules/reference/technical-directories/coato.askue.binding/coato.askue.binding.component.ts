import { Component } from '@angular/core';
import {ColDef} from "ag-grid-community";
import {BasicReferencePage} from "../../basic.reference.page";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {CoatoAskueBindingFormComponent} from "./actions/coato.askue.binding.form/coato.askue.binding.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";

@Component({
  template: basicTemplate(),
})
export class CoatoAskueBindingComponent extends BasicReferencePage {
  columnDefs: ColDef[] = [
    {
      field: 'coatoBranch.code',
      headerName: 'GENERAL.CODE_ESP',
    },
    {
      colId: 'coatoBranchId',
      floatingFilterComponentParams: {
        type: 'autocomplete',
        request: new ReferenceDropDownRequest(ReferenceApiUrls.COATO_BRANCHES),
      },
      flex: 20,
      field: 'coatoBranch.nameUz',
      headerName: 'GENERAL.NAME_COATO',
    },
    {
      colId: 'askueTypeId',
      floatingFilterComponentParams: {
        type: 'autocomplete',
        request: new ReferenceDropDownRequest(ReferenceApiUrls.ASKUE_TYPES),
      },
      field: 'askueType.nameUz',
      headerName: 'GENERAL.ASKUE_TYPE',
    },
    {
      flex: 20,
      field: 'urlAddress',
      headerName: 'GENERAL.URL',
    },
    {
      colId: 'processNumberId',
      floatingFilterComponentParams: {
        type: 'autocomplete',
        request: new ReferenceDropDownRequest(ReferenceApiUrls.COATO_ASKUE_PROCESS),
      },
      field: 'processNumber.code',
      headerName: 'GENERAL.PROCESS_NUMBER',
    },
    {
      floatingFilterComponentParams: {
        type: 'status',
      },
      field: 'status',
      type: 'status',
      headerName: 'GENERAL.STATUS',
    },
    {
      flex: 15,
      field: 'updatedAt',
      type: 'date',
      headerName: 'GENERAL.UPDATED_AT',
    },
    {
      flex: 15,
      field: 'login',
      headerName: 'GENERAL.LOGIN',
    },
  ];

  title = 'MENU.REFERENCE.TECHNICAL_GUIDES.ASKUE_BINDING_ACCORDING_TO_COATO';
  request = new ReferenceListRequest(ReferenceApiUrls.COATO_ASKUE_BINDING);

  addUpdate(id = null) {
    FormModalComponent.showModal(CoatoAskueBindingFormComponent, this.title, id, SizeModal.sm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
  override filter: FilterFieldGroup = {
    coatoBranchId: new FilterField('GENERAL.COATO', 'autocomplete', new ReferenceDropDownRequest(ReferenceApiUrls.COATO_BRANCHES)),
    askueTypeId: new FilterField('GENERAL.ASKUE_TYPE', 'autocomplete', new ReferenceDropDownRequest(ReferenceApiUrls.ASKUE_TYPES)),
    urlAddress: new FilterField('GENERAL.URL', 'input'),
    processNumberId: new FilterField('GENERAL.PROCESS_NUMBER', 'autocomplete', new ReferenceDropDownRequest(ReferenceApiUrls.COATO_ASKUE_PROCESS)),
    status: new FilterField('GENERAL.STATUS', 'status'),
  }
}
