import { Component } from '@angular/core';
import {ColDef} from "ag-grid-community";
import {BasicReferencePage} from "../../basic.reference.page";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {CoatoAskueBindingFormComponent} from "./actions/coato.askue.binding.form/coato.askue.binding.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";

@Component({
  template: basicTemplate(`
    <het-button  [label]="'GENERAL.PROTOCOL'"></het-button>
  `),
})
export class CoatoAskueBindingComponent extends BasicReferencePage {
  ngOnInit(): void {
    this.defaultColumnDef['minWidth'] = 150
  }
  columnDefs: ColDef[] = [
    {

      floatingFilterComponentParams: {
        type: 'autocomplete',
        request: new ReferenceDropDownRequest(ReferenceApiUrls.COATO_BRANCHES),
      },
      flex: 20,
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
      headerName: 'REFERENCE.COATO',
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
      minWidth: 250,
      colId: 'processNumberId',
      floatingFilterComponentParams: {
        type: 'autocomplete',
        request: new ReferenceDropDownRequest(ReferenceApiUrls.COATO_ASKUE_PROCESS),
      },
      type: 'code_nameUz',
      field: 'processNumber',
      headerName: 'GENERAL.PROCESS_NUMBER',
    },
    {
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
      type: 'user',
      flex: 15,
      colId: 'createdBy',
      field: 'createdByName',
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
}
