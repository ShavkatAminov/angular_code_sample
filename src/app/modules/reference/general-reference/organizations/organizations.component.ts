import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "../../../../shared/helpers/modal/modal.component";
import {OrganizationsFormComponent} from "./actions/organizations.form/organizations.form.component";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {FormModalComponent} from "../../../../shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";

@Component({
  template: basicTemplate(),
})
export class OrganizationsComponent extends BasicReferencePage {
  columnDefs: ColDef[] = [
      {
          headerName: 'GENERAL.CODE',
          field: 'code',
          flex: 2,
      },
      {
        headerName: 'REFERENCE.DOCUMENT_TYPE_ORGANIZATION',
        field: 'nameUz',
        flex: 12,
      },
      {
        floatingFilterComponentParams: {
            type: 'status',
        },
        headerName: 'GENERAL.STATUS',
        field: 'status',
        flex: 2,
        type: 'status'
      },
  ];

  title = 'MENU.REFERENCE.GENERAL_GUIDES.ORGANIZATIONS';
  request = new ReferenceListRequest(ReferenceApiUrls.ORGANIZATIONS);

  addUpdate(id = null) {
    FormModalComponent.showModal(OrganizationsFormComponent, this.title, id, SizeModal.sm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
  override filter: FilterFieldGroup = {
    nameUz: new FilterField('REFERENCE.DOCUMENT_TYPE_ORGANIZATION', 'input'),
    code: new FilterField('GENERAL.CODE', 'input'),
    status: new FilterField('GENERAL.STATUS', 'status'),
  }
}
