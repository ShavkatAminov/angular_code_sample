import { Component } from '@angular/core';
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {ManagementTypesFormComponent} from "./actions/management.types.form/management.types.form.component";
import {BasicReferencePage} from "../../basic.reference.page";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';

@Component({
  template: basicTemplate(),
})
export class ManagementTypesComponent extends BasicReferencePage{
  columnDefs: ColDef[] = [
    {
      field: 'id',
      headerName: 'GENERAL.ID',
    },
    {
      field: 'nameUz',
      headerName: 'GENERAL.NAME',
    },
    {
      field: 'code',
      headerName: 'GENERAL.CODE',
    },
    {
      floatingFilterComponentParams: {
        type: 'date',
      },
      field: 'createdAt',
      headerName: 'GENERAL.CREATED_AT',
      type: 'date'
    },
    {
      field: 'createdBy',
      headerName: 'GENERAL.CREATED_BY',
    },
    {
      field: 'updatedAt',
      headerName: 'GENERAL.UPDATED_AT',
      type: 'date'
    },
    {
      field: 'updatedBy',
      headerName: 'GENERAL.UPDATED_BY',
    },
    {
      floatingFilterComponentParams: {
        type: 'status',
      },
      field: 'status',
      headerName: 'GENERAL.STATUS',
      type: 'status',
    },
  ];

  title = 'MENU.REFERENCE.GENERAL_GUIDES.MANAGEMENT_TYPES';
  request = new ReferenceListRequest(ReferenceApiUrls.MANAGEMENT_TYPES);

  addUpdate(id = null) {
    FormModalComponent.showModal(ManagementTypesFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
  override filter: FilterFieldGroup = {
    nameUz: new FilterField('GENERAL.NAME', 'input'),
    code: new FilterField('GENERAL.CODE', 'input'),
    status: new FilterField('GENERAL.STATUS', 'status'),
  }
}
