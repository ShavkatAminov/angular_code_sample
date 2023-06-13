import {Component, OnInit} from '@angular/core';
import {BasicReferencePage} from "../../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {PsFiderTpFormComponent} from "./actions/ps.fider.tp.form/ps.fider.tp.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";
import {ReferenceDropDownRequest} from "@app/modules/reference/basic/ReferenceDropDownRequest";

@Component({
    template: basicTemplate(),
})
export class PsFiderTpCompoent extends BasicReferencePage implements OnInit {
    ngOnInit(): void {
        this.defaultColumnDef["minWidth"] = 150;
    }

    columnDefs: ColDef[] = [
        {
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.PS_FIDER_TP_TYPE),
            },
            colId: 'psFiderTpTypeId',
            field: 'psFiderTPType.nameUz',
            headerName: 'GENERAL.TYPE',
            pinned: 'left',
        },
        {
            field: 'code',
            headerName: 'GENERAL.CODE',
            pinned: 'left',
            maxWidth: 150
        },
        {
            field: 'nameUz',
            headerName: 'GENERAL.NAME',
            pinned: 'left',
            minWidth: 250
        },

        {
            field: 'upSteamFider.code',
            headerName: 'GENERAL.CODE',
            minWidth: 150,
            valueGetter: params => {
                if (params.data && params.data.psFiderTPType && params.data.psFiderTPType.id === 2) {
                    return params.data?.upSteamFider.code
                } else {
                    return params.data?.upSteamFider?.upSteamFider?.code || '';
                }
            }
        },
        {
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.PS_FIDER_TP),
            },
            colId: 'upSteamFiderId',
            field: 'upSteamFider.nameUz',
            headerName: 'MENU.REFERENCE.GENERAL_GUIDES.UPSTREAM_PS',
            minWidth: 200,
            valueGetter: params => {
                if (params.data && params.data.psFiderTPType && params.data.psFiderTPType.id === 2) {
                    return params.data?.upSteamFider.nameUz
                } else {
                    return params.data?.upSteamFider?.upSteamFider?.nameUz || '';
                }
            }
        },
        {
            colId: 'coatoCodeId',
            field: 'upSteamFider.upSteamFider.coatoCode',
            headerName: 'MENU.REFERENCE.GENERAL_GUIDES.BRANCH',
            valueGetter: params => {
                if (params.data && params.data.psFiderTPType && params.data.psFiderTPType.id === 2) {
                    return params.data?.upSteamFider.coatoCode;
                } else {
                    return params.data?.upSteamFider?.upSteamFider?.coatoCode || '';
                }
            }
        },
        {
            field: 'upSteamFider.code',
            headerName: 'GENERAL.CODE',
            maxWidth: 130,
            valueGetter: params => {
                if (params.data && params.data.psFiderTPType && params.data.psFiderTPType.id === 2) {
                    return '';
                } else {
                    return params.data?.upSteamFider?.code  || '';
                }
            }
        },
        {
            colId: 'upSteamSubstationId',
            field: 'upSteamFider.upSteamFider.nameUz',
            headerName: 'MENU.REFERENCE.GENERAL_GUIDES.UPSTREAM_FEEDER',
            minWidth: 200,
            valueGetter: params => {
                if (params.data && params.data.psFiderTPType && params.data.psFiderTPType.id === 2) {
                    return '';
                } else {
                    return params.data?.upSteamFider?.nameUz  || '';
                }
            }
        },
        {
            colId: 'psFiderTpTypeCode',
            field: 'upSteamFider.coatoCode',
            headerName: 'MENU.REFERENCE.GENERAL_GUIDES.BRANCH',
            valueGetter: params => {
                if (params.data && params.data.psFiderTPType && params.data.psFiderTPType.id === 2) {
                    return '';
                } else {
                    return params.data?.upSteamFider?.upSteamFider?.coatoCode || '';
                }
            }
        },
        {
            field: 'updatedAt',
            headerName: 'GENERAL.UPDATED_AT',
            type: 'date',
            minWidth: 150
        },
        {
            type: 'user',
            field: 'createdByName',
            colId: 'createdBy',
            headerName: 'GENERAL.CREATED_BY',
            maxWidth: 250
        },
        {
            field: 'status',
            headerName: 'GENERAL.STATUS',
            type: 'status',
            maxWidth: 130
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
