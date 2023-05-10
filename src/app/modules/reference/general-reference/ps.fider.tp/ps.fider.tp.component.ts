import {Component, OnInit} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {PsFiderTpFormComponent} from "./actions/ps.fider.tp.form/ps.fider.tp.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";

@Component({
    template: basicTemplate(),
})
export class PsFiderTpCompoent extends BasicReferencePage implements OnInit{
    ngOnInit(): void {
        this.defaultColumnDef["minWidth"] = 150;
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
            headerName: 'ACCOUNTING_SETTLEMENT_HC.AFFILIATION',
        },
        {
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.PS_FIDER_TP),
            },
            colId: 'upSteamFiderId',
            headerName: 'MENU.REFERENCE.GENERAL_GUIDES.UP_STEAM_FIDER',
            valueGetter:params=>{
                console.log(params)
                if (params.data && params.data.psFiderTpTypeId==3){
                    return params?.data?.upSteamFider.nameUz
                }else {
                    return ''
                }
            },
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
            type: 'user',
            field: 'createdByName',
            headerName: 'GENERAL.CREATED_BY'
        },
        {
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
}
