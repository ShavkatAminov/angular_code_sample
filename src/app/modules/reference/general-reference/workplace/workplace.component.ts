import { Component } from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {WorkPlaceFormComponent} from "./actions/work.place.form/work.place.form.component";
import {basicTemplate} from "../../basic/basicTemplate";
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";

@Component({
  template: basicTemplate(),
})
export class WorkplaceComponent extends BasicReferencePage{
  columnDefs: ColDef[] = [
    {
      minWidth: 150,
      flex:3,
      field: 'code',
      headerName: 'GENERAL.CODE',
    },
    {
      minWidth: 150,
      flex: 5,
      field: 'nameUz',
      headerName: 'GENERAL.NAME',
    },
    {
      floatingFilterComponentParams: {
        type: 'autocomplete',
        request: new ReferenceDropDownRequest(ReferenceApiUrls.ORGANIZATIONS),
      },
      colId: 'organizationId',
      minWidth: 300,
      flex: 5,
      field: 'organization',
      type: 'code_nameUz',
      headerName: 'REFERENCE.ORGANIZATION',
    },
    {
      minWidth: 150,
      flex:3,
      field: 'numberOfEmployees',
      headerName: 'REFERENCE.EMPLOYEES_NUMBER',
    },
    {
      floatingFilterComponentParams: {
        type: 'autocomplete',
        request: new ReferenceDropDownRequest(ReferenceApiUrls.STATE_GOVERNMENT_ORGANIZATIONS),
      },
      type: 'code_nameUz',
      colId: 'stateGovernmentOrganizationId',
      minWidth: 300,
      field: 'stateGovernmentOrganization',
      headerName: 'REFERENCE.GOVERNMENT_ORGANIZATION',
    },
    {
      minWidth: 150,
      flex:3,
      field: 'tin',
      headerName: 'REFERENCE.TIN',
    },
    {
      floatingFilterComponentParams: {
        type: 'autocomplete',
        request: new ReferenceDropDownRequest(ReferenceApiUrls.ORGANIZATIONS),
      },
      colId: 'higherOrganizationId',
      minWidth: 300,
      flex:4,
      field: 'higherOrganization.nameUz',
      headerName: 'REFERENCE.HIGHER_ORGANIZATION',
    },
    {
      minWidth: 150,
      flex:4,
      field: 'processed',
      type: 'status',
      headerName: 'REFERENCE.PROCESSED',
    },
    {
      flex:3,
      field: 'updatedAt',
      type: 'date',
      headerName: 'GENERAL.UPDATED_AT',
    },
    {
      type: 'user',
      flex:3,
      field: 'createdByName',
      headerName: 'GENERAL.CREATED_BY',
    },
    {
      minWidth: 150,
      flex:3,
      type: 'status',
      field: 'status',
      headerName: 'GENERAL.STATUS',
    }
  ];

  title = 'MENU.REFERENCE.GENERAL_GUIDES.WORK_PLACES';
  request = new ReferenceListRequest(ReferenceApiUrls.WORK_PLACE);

  addUpdate(id = null) {
    FormModalComponent.showModal(WorkPlaceFormComponent, this.title, id, SizeModal.sm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
}
