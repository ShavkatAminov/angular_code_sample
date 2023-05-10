import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {NationalEconomyBranchFormComponent} from "./actions/national.economy.levels.form/national.economy.branch.form.component";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {BasicReferencePage} from "../../basic.reference.page";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";


@Component({
  template: basicTemplate(`
    <het-button [label]="'GENERAL.CHANGE_PROTOCOL'"></het-button>
    <het-select [options]="printOptions"  ></het-select>
    <het-button [label]="'GENERAL.PRINT'"></het-button>
  `),
})
export class NationalEconomyBranchComponent extends BasicReferencePage {
  columnDefs: ColDef[] = [
      { field: 'code', flex: 2, headerName: 'GENERAL.CODE',},
      { field: 'nameUz', headerName: 'REFERENCE.NAME_OF_BRANCH_OF',},
      { field: 'status', type: 'status', flex: 2, headerName: 'GENERAL.STATUS',},
  ];

  title = 'MENU.REFERENCE.NATIONAL_STATISTICS_HANDBOOKS.CLASSIFIER_OF_BRANCHES_OF_THE_NATIONAL_ECONOMY';
  request = new ReferenceListRequest(ReferenceApiUrls.NATIONAL_ECONOMY_BRANCH);

  addUpdate(id = null) {
    FormModalComponent.showModal(NationalEconomyBranchFormComponent, this.title, id, SizeModal.sm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
}
