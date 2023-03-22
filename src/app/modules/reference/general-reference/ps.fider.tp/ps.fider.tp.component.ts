import {Component} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "../../../../shared/helpers/modal/modal.component";
import {PsFiderTpFormComponent} from "./actions/ps.fider.tp.form/ps.fider.tp.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "../../../../shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup} from 'app/shared/helpers/filter/filter.component/filterField';
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";

@Component({
    template: basicTemplate(),
})
export class PsFiderTpCompoent extends BasicReferencePage {
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
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.PS_FIDER_TP_TYPE),
            },
            colId: 'psFiderTpTypeId',
            field: 'psFiderTPType.nameUz',
            headerName: 'MENU.REFERENCE.GENERAL_GUIDES.PS_FIDER_TP_TYPE',
        },
        {
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.AFFILIATION),
            },
            colId: 'affiliationId',
            field: 'affiliation.nameUz',
            headerName: 'MENU.REFERENCE.GENERAL_GUIDES.AFFILIATION',
        },
        {
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.SUBSTATION),
            },
            colId: 'upSteamSubstationId',
            field: 'substation.nameUz',
            headerName: 'MENU.REFERENCE.GENERAL_GUIDES.SUBSTATION',
        },
        {
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.COATO_BRANCHES),
            },
            colId: 'coatoBranchId',
            field: 'coatoBranches.nameUz',
            headerName: 'MENU.REFERENCE.GENERAL_GUIDES.COATO_BRANCH',
        },
        {
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.PS_FIDER_TP),
            },
            colId: 'upSteamFiderId',
            field: 'psFiderTP.nameUz',
            headerName: 'MENU.REFERENCE.GENERAL_GUIDES.UP_STEAM_FIDER',
        },
        {
            field: 'capacity',
            headerName: 'MENU.REFERENCE.GENERAL_GUIDES.СAPACITY',
        },
        {
            field: 'updatedAt',
            headerName: 'GENERAL.UPDATED_AT',
            type: 'date'
        },
        {
            field: 'createdBy',
            headerName: 'GENERAL.CREATED_BY'
        },
        {
            floatingFilterComponentParams: {
                type: 'status',
            },
            field: 'status',
            headerName: 'GENERAL.STATUS',
            type: 'status'
        },
    ];

    title = 'MENU.REFERENCE.GENERAL_GUIDES.DIRECTORY_PS_FEEDER_TP';
    request = new ReferenceListRequest(ReferenceApiUrls.PS_FIDER_TP);

    addUpdate(id = null) {
        FormModalComponent.showModal(PsFiderTpFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
            if (res)
                this.reload();
        });
    }

    override filter: FilterFieldGroup = {
        code: new FilterField('GENERAL.CODE', 'input'),
        nameUz: new FilterField('GENERAL.NAME', 'input'),
        psFiderTpTypeId: new FilterField('MENU.REFERENCE.GENERAL_GUIDES.PS_FIDER_TP_TYPE', 'autocomplete', new ReferenceDropDownRequest(ReferenceApiUrls.PS_FIDER_TP_TYPE)),
        affiliationId: new FilterField('MENU.REFERENCE.GENERAL_GUIDES.AFFILIATION', 'autocomplete', new ReferenceDropDownRequest(ReferenceApiUrls.AFFILIATION)),
        upSteamSubstationId: new FilterField('MENU.REFERENCE.GENERAL_GUIDES.SUBSTATION', 'autocomplete', new ReferenceDropDownRequest(ReferenceApiUrls.SUBSTATION)),
        coatoBranchId: new FilterField('MENU.REFERENCE.GENERAL_GUIDES.COATO_BRANCH', 'autocomplete', new ReferenceDropDownRequest(ReferenceApiUrls.COATO_BRANCHES)),
        upSteamFiderId: new FilterField('MENU.REFERENCE.GENERAL_GUIDES.UP_STEAM_FIDER', 'autocomplete', new ReferenceDropDownRequest(ReferenceApiUrls.PS_FIDER_TP)),
        capacity: new FilterField('MENU.REFERENCE.GENERAL_GUIDES.СAPACITY', 'input'),
        status: new FilterField('GENERAL.STATUS', 'status'),
    }
}
