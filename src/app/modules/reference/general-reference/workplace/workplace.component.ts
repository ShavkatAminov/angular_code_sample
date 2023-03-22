import { Component } from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "../../../../shared/helpers/form.modal/form.modal.component";
import {SizeModal} from "../../../../shared/helpers/modal/modal.component";
import {WorkPlaceFormComponent} from "./actions/work.place.form/work.place.form.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';
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
      flex:5,
      field: 'nameUz',
      headerName: 'GENERAL.NAME',
    },
    {
      filter: false,
      floatingFilter: false,
      minWidth: 150,
      flex:4,
      field: 'organization.code',
      headerName: 'REFERENCE.CODE_ORGANIZATION',
    },
    {
      floatingFilterComponentParams: {
        type: 'autocomplete',
        request: new ReferenceDropDownRequest(ReferenceApiUrls.ORGANIZATIONS),
      },
      colId: 'organizationId',
      minWidth: 150,
      flex:5,
      field: 'organization.nameUz',
      headerName: 'REFERENCE.NAME_ORGANIZATION',
    },
    {
      minWidth: 150,
      flex:3,
      field: 'numberOfEmployees',
      headerName: 'REFERENCE.EMPLOYEES_NUMBER',
    },
    {
      filter: false,
      floatingFilter: false,
      minWidth: 150,
      flex:3,
      field: 'stateGovernmentOrganization.code',
      headerName: 'REFERENCE.CODE_GOVERNMENT_ORGANIZATION',
    },
    {
      floatingFilterComponentParams: {
        type: 'autocomplete',
        request: new ReferenceDropDownRequest(ReferenceApiUrls.STATE_GOVERNMENT_ORGANIZATIONS),
      },
      colId: 'stateGovernmentOrganizationId',
      minWidth: 150,
      flex:5,
      field: 'stateGovernmentOrganization.nameUz',
      headerName: 'REFERENCE.NAME_GOVERNMENT_ORGANIZATION',
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
      minWidth: 150,
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
      minWidth: 150,
      flex:3,
      field: 'updatedAt',
      type: 'date',
      headerName: 'GENERAL.UPDATED_AT',
    },
    {
      minWidth: 150,
      flex:3,
      field: 'createdBy',
      headerName: 'GENERAL.CREATED_BY',
    },
    {
      floatingFilterComponentParams: {
        type: 'status',
      },
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
  override filter: FilterFieldGroup = {
    nameUz: new FilterField('GENERAL.NAME', 'input'),
    code: new FilterField('GENERAL.CODE', 'input'),
    status: new FilterField('GENERAL.STATUS', 'status'),
    tin: new FilterField('REFERENCE.TIN', 'input'),
    stateGovernmentOrganizationId: new FilterField('REFERENCE.GOVERNMENT_ORGANIZATION', 'autocomplete', new ReferenceDropDownRequest(ReferenceApiUrls.STATE_GOVERNMENT_ORGANIZATIONS)),
    processed: new FilterField('REFERENCE.PROCESSED', 'status'),
    organizationId: new FilterField('REFERENCE.ORGANIZATION', 'autocomplete', new ReferenceDropDownRequest(ReferenceApiUrls.ORGANIZATIONS)),
    higherOrganizationId: new FilterField('REFERENCE.HIGHER_ORGANIZATION', 'autocomplete', new ReferenceDropDownRequest(ReferenceApiUrls.ORGANIZATIONS)),
  }
}
