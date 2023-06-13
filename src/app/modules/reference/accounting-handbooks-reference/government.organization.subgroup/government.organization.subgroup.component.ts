import { Component } from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {
  SubgroupGovernmentOrganizationFormComponent
} from "./actions/subgroup.government.organization.form/subgroup.government.organization.form.component";
import {basicTemplate} from "../../basic/basicTemplate";
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";


@Component({
  template: basicTemplate(`
    <het-button [label]="'GENERAL.CHANGE_PROTOCOL'"></het-button>
    <het-select [options]="printOptions"  ></het-select>
    <het-button [label]="'GENERAL.PRINT'"></het-button>
  `),
})
export class GovernmentOrganizationSubgroupComponent extends BasicReferencePage {
  ngOnInit(): void {
    this.defaultColumnDef['minWidth'] = 150
  }
  columnDefs: ColDef[] = [
    {
      flex:3,
      headerName: "REFERENCE.CODE_SUB_GROUPS",
      field: 'code',
    },
    {
      minWidth: 200,
      field: 'name',
      headerName: 'GENERAL.NAME',
      valueFormatter: function ({data}) {
        if (data){
          return `${data.nameUz}`
        }
      },
      flex: 20
    },
    {
      flex:4,
      headerName: "REFERENCE.GOVERNMENT_CODE",
      field: 'stateGovernmentOrganization.code',
      colId: 'stateGovernmentOrganizationId',
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
      flex:5,
      headerName: "GENERAL.STATUS",
      field: 'status',
      type: 'status'
    },
  ];

  title = 'MENU.REFERENCE.NATIONAL_STATISTICS_HANDBOOKS.SUBGROUP_OF_GOVERNMENT_ORGANIZATIONS';
  request = new ReferenceListRequest(ReferenceApiUrls.SUBGROUP_GOVERNMENT_ORGANIZATIONS);

  addUpdate(id = null) {
    FormModalComponent.showModal(SubgroupGovernmentOrganizationFormComponent, this.title, id, SizeModal.sm).subscribe(res => {
      if (res)
        this.reload();
    });
  }
}
