import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "../../../../shared/helpers/modal/modal.component";
import {
    EconomicActivityTypeFormComponent
} from "./actions/economic.activity.type.form/economic.activity.type.form.component";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {FormModalComponent} from "../../../../shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';

@Component({
  template: basicTemplate(),
})
export class EconomicActivityTypeComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {
            headerName: "GENERAL.CODE",
            field: 'code',
            flex: 3
        },
        {
            headerName: "GENERAL.NAME",
            field: 'nameUz',
        },
        {
            floatingFilterComponentParams: {
                type: 'status',
            },
            headerName: "GENERAL.STATUS",
            field: 'status',
            flex: 3,
            type: 'status'
        },
    ];

    title = 'MENU.REFERENCE.NATIONAL_STATISTICS_HANDBOOKS.CLASSIFIER_TYPES_ECONOMIC';
    request = new ReferenceListRequest(ReferenceApiUrls.ECONOMIC_ACTIVITY_TYPE);

    addUpdate(id = null) {
        FormModalComponent.showModal(EconomicActivityTypeFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
  override filter: FilterFieldGroup = {
      code: new FilterField('GENERAL.CODE', 'input'),
      nameUz: new FilterField('GENERAL.NAME', 'input'),
    status: new FilterField('GENERAL.STATUS', 'status'),
  }
}
