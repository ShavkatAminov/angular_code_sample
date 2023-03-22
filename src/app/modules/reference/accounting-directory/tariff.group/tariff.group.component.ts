import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "../../../../shared/helpers/modal/modal.component";
import {TariffGroupFormComponent} from "./actions/tariff.group.form/tariff.group.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "../../../../shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';

@Component({
  template: basicTemplate(),
})
export class TariffGroupComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {
            field: 'code',
            resizable: true,
            headerName: 'GENERAL.CODE',
            flex: 2,
        },
        {
            field: 'nameUz',
            headerName: 'REFERENCE.NAME_TARIFF_GROUP',
            flex: 13

        },
        {
            field: 'pkmGroupCode',
            headerName: 'REFERENCE.PKM_GROUP_CODE',
            flex: 3
        },
        {
            field: 'baseTariff',
            headerName: 'REFERENCE.BASE_TARIFF',
            flex: 3
        },
        {
            field: 'coefficient',
            headerName: 'REFERENCE.WITH_HIGH_COEFFICIENT',
            flex: 4
        },
        {
            floatingFilterComponentParams: {
                type: 'status',
            },
            field: 'status',
            headerName: 'GENERAL.STATUS',
            type: 'status',
            flex: 3
        },
    ];

    title = 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.TARIFF_GROUP_DIRECTOR';
    request = new ReferenceListRequest(ReferenceApiUrls.TARIFF_GROUP);

    addUpdate(id = null) {
        FormModalComponent.showModal(TariffGroupFormComponent, this.title, id, SizeModal.sm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
  override filter: FilterFieldGroup = {
    nameUz: new FilterField('REFERENCE.NAME_TARIFF_GROUP', 'input'),
    code: new FilterField('GENERAL.CODE', 'input'),
    status: new FilterField('GENERAL.STATUS', 'status'),
    pkmGroupCode: new FilterField('REFERENCE.PKM_GROUP_CODE', 'input'),
    baseTariff: new FilterField('REFERENCE.BASE_TARIFF', 'input'),
    coefficient: new FilterField('REFERENCE.WITH_HIGH_COEFFICIENT', 'input'),
  }
}
