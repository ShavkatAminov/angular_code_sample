import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {NationalEconomyBranchFormComponent} from "./actions/national.economy.levels.form/national.economy.branch.form.component";
import {SizeModal} from "../../../../shared/helpers/modal/modal.component";
import {BasicReferencePage} from "../../basic.reference.page";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "../../../../shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";
import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';

@Component({
  template: basicTemplate(),
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
    FormModalComponent.showModal(NationalEconomyBranchFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
  override filter: FilterFieldGroup = {
    nameUz: new FilterField('REFERENCE.NAME_OF_BRANCH_OF', 'input'),
    code: new FilterField('GENERAL.CODE', 'input'),
    status: new FilterField('GENERAL.STATUS', 'status'),
  }
}
