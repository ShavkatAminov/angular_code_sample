import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";
import {
  TreasuryOrganizationalFormFormComponent
} from "./actions/treasury.organizational.form/treasury.organizational.form.form.component";
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";

@Component({
  template: basicTemplate(),
})
export class TreasuryOrganizationalFormComponent extends BasicReferencePage {
  ngOnInit(): void {
    this.defaultColumnDef['minWidth'] = 150
  }
  columnDefs: ColDef[] = [
    {
      field: 'code',
      headerName: 'GENERAL.CODE',
    },
    {
      field: 'nameUz',
      headerName: 'GENERAL.NAME',
    },
    {
      minWidth: 500,
      colId: 'stateGovernmentOrganizationId',
      floatingFilterComponentParams: {
        type: 'autocomplete',
        request: new ReferenceDropDownRequest(ReferenceApiUrls.STATE_GOVERNMENT_ORGANIZATIONS),
      },
      type: 'code_nameUz',
      field: 'stateGovernmentOrganization',
      headerName: 'REFERENCE.GOVERNMENT_ORGANIZATION',
    },
    {
      field: 'updatedAt',
      headerName: 'GENERAL.UPDATED_AT',
      type: 'date',
    },
    {
      type: 'user',
      field: 'updatedByName',
      headerName: 'GENERAL.UPDATED_BY',
    },
    {
      field: 'createdAt',
      headerName: 'GENERAL.CREATED_AT',
      type: 'date',
    },
    {
      type: 'user',
      field: 'createdByName',
      headerName: 'GENERAL.CREATED_BY',
    },
    {
      field: 'status',
      headerName: 'GENERAL.STATUS',
      type: 'status',
      minWidth: 200
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
}
