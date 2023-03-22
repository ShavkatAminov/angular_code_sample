import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "../../../../shared/helpers/modal/modal.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "../../../../shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';
import {
  TreasuryOrganizationalFormFormComponent
} from "./actions/treasury.organizational.form/treasury.organizational.form.form.component";
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";

@Component({
  template: basicTemplate(),
})
export class TreasuryOrganizationalFormComponent extends BasicReferencePage {
  columnDefs: ColDef[] = [
    {
      field: 'code',
      headerName: 'GENERAL.CODE',
      flex: 5
    },
    {
      field: 'nameUz',
      headerName: 'GENERAL.NAME',
      flex: 9
    },
    {
      floatingFilterComponentParams: {
        type: 'autocomplete',
        request: new ReferenceDropDownRequest(ReferenceApiUrls.STATE_GOVERNMENT_ORGANIZATIONS),
      },
      field: 'stateGovernmentOrganization.nameUz',
      headerName: 'REFERENCE.NAME_GOVERNMENT_ORGANIZATION',
      flex: 15
    },
    {
      floatingFilterComponentParams: {
        type: 'date',
      },
      field: 'createdAt',
      headerName: 'GENERAL.CREATED_AT',
      type: 'date',
      flex: 7
    },
    {
      field: 'createdBy',
      headerName: 'GENERAL.CREATED_BY',
      flex: 6
    },
    {
      field: 'updatedAt',
      headerName: 'GENERAL.UPDATED_AT',
      type: 'date',
      flex: 7
    },
    {
      field: 'updatedBy',
      headerName: 'GENERAL.UPDATED_BY',
      flex: 7
    },
    {
      floatingFilterComponentParams: {
        type: 'status',
      },
      field: 'status',
      headerName: 'GENERAL.STATUS',
      type: 'status',
      flex: 7
    },
  ];

  title = 'MENU.REFERENCE.NATIONAL_STATISTICS_HANDBOOKS.TREASURY_ORGANIZATIONAL';
  request = new ReferenceListRequest(ReferenceApiUrls.TREASURY_ORGANIZATIONAL);

  addUpdate(id = null) {
    FormModalComponent.showModal(TreasuryOrganizationalFormFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
      if (res)
        this.reload();
    });
  }
  override filter: FilterFieldGroup = {
    code: new FilterField('GENERAL.CODE', 'input'),
    nameUz: new FilterField('GENERAL.NAME', 'input'),
    stateGovernmentOrganizationId: new FilterField('REFERENCE.NAME_GOVERNMENT_ORGANIZATION', 'autocomplete',new ReferenceDropDownRequest(ReferenceApiUrls.STATE_GOVERNMENT_ORGANIZATIONS)),
    status: new FilterField('GENERAL.STATUS', 'status'),
  }
}
