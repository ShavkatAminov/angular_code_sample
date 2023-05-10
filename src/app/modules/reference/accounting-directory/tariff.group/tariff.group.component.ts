import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {TariffGroupFormComponent} from "./actions/tariff.group.form/tariff.group.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";
;

@Component({
  template: basicTemplate(`
    <het-button [label]="'GENERAL.CHANGE_PROTOCOL'"></het-button>
    <het-select [options]="printOptions" value="HTML" ></het-select>
    <het-button [label]="'GENERAL.PRINT'"></het-button>
  `),
})
export class TariffGroupComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {
            field: 'id',
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
}
