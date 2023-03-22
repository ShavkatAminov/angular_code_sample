import { Component } from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "../../../../shared/helpers/form.modal/form.modal.component";
import {SizeModal} from "../../../../shared/helpers/modal/modal.component";
import {
  SubgroupGovernmentOrganizationFormComponent
} from "./actions/subgroup.government.organization.form/subgroup.government.organization.form.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";

@Component({
  template: basicTemplate(),
})
export class GovernmentOrganizationSubgroupComponent extends BasicReferencePage {
  columnDefs: ColDef[] = [
    {
      flex:3,
      headerName: "GENERAL.CODE",
      field: 'code',
    },
    {
      flex:15,
      headerName: "GENERAL.NAME",
      field: 'nameUz',
    },
    {
      flex:4,
      headerName: "REFERENCE.GOVERNMENT_CODE",
      field: 'stateGovernmentOrganization.code',
      floatingFilterComponentParams: {
        type: 'autocomplete',
        request: new ReferenceDropDownRequest(ReferenceApiUrls.STATE_GOVERNMENT_ORGANIZATIONS)
      },
    },
    {
      headerName: "REFERENCE.SHORT_NAME",
      field: 'shortName',
    },
    {
      flex:5,
      headerName: "REFERENCE.PS9CODE",
      field: 'ps9Code',
    },
    {
      flex:4,
      headerName: "REFERENCE.SUBGROUP_TYPE",
      field: 'subgroupType',
    },

    {
      flex:5,
      headerName: "REFERENCE.AVAILABILITY",
      field: 'availability',
    },
    {
      floatingFilterComponentParams: {
        type: 'status',
      },
      flex:5,
      headerName: "GENERAL.STATUS",
      field: 'status',
      type: 'status'
    },
  ];

  title = 'MENU.REFERENCE.NATIONAL_STATISTICS_HANDBOOKS.SUBGROUP_OF_GOVERNMENT_ORGANIZATIONS';
  request = new ReferenceListRequest(ReferenceApiUrls.SUBGROUP_GOVERNMENT_ORGANIZATIONS);

  addUpdate(id = null) {
    FormModalComponent.showModal(SubgroupGovernmentOrganizationFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
      if (res)
        this.reload();
    });
  }
  override filter: FilterFieldGroup = {
    nameUz: new FilterField('nameUz', 'input'),
    code: new FilterField('code', 'input'),
    status: new FilterField('status', 'status'),
    shortName: new FilterField('shortName', 'input'),
    availability: new FilterField('availability', 'input'),
    ps9Code: new FilterField('', 'input'),
    stateGovernmentOrganizationId: new FilterField('', 'input'),
    subgroupType: new FilterField('subgroupType', 'input'),
  }
}
