import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {BasicReferencePage} from "../../basic.reference.page";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {
    AssesingLossNetworkFormComponent
} from "./actions/assesing.loss.network.form/assesing.loss.network.form.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";

@Component({
    template: basicTemplate(),
})
export class LevelsOfElectricityLosesComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {field: 'validityDate', headerName: 'REFERENCE.VALIDITY_DATE', type: 'date'},
        {
            colId: 'coatoId',
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.COATO_BRANCHES),
            },
            field: 'coatoBranches.code', headerName: 'REFERENCE.COATO',
            minWidth: 150,
            pinned: 'left'
        },
        {
            colId: 'standardValuesId',
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.STANDARD_VALUES),
            },
            field: 'standardValues.voltageLevelNetwork',
            headerName: 'REFERENCE.NETWORK',
            minWidth: 150,
            pinned: 'left'
        },
        {
            field: 'networkSuppliedEnery',
            headerName: 'REFERENCE.NETWORK_SUPPIED_ENERGY',
            minWidth: 150,
            pinned: 'left'
        },
        {
            field: 'losses',
            headerName: 'REFERENCE.AVERAGE_LOSS_IN_GENERAL',
            minWidth: 150
        },
        {
            field: 'avgLossPercentage',
            headerName: 'REFERENCE.AVERAGE_LOSS_IN_GENERAL_IN_PERCENTAGE',
            minWidth: 150
        },
        {
            field: 'minimumLoss',
            headerName: 'REFERENCE.MINIMUM_LOSS_IN_GENERAL',
            minWidth: 150
        },
        {
            field: 'minimumLossPercentage',
            headerName: 'REFERENCE.MINIMUM_LOSS_IN_GENERAL_IN_PERCENTAGE',
            minWidth: 150
        },
        {
            field: 'maximumLoss',
            headerName: 'REFERENCE.MAXIMUM_LOSS_IN_GENERAL',
            minWidth: 150
        },
        {
            field: 'maximumLossPercentage',
            headerName: 'REFERENCE.MAXIMUM_LOSS_IN_GENERAL_IN_PERCENTAGE',
            minWidth: 150
        },
        {
            field: 'createdAt',
            headerName: 'GENERAL.CREATED_AT',
            type: 'date'
        },
        {
            field: 'updatedAt',
            headerName: 'GENERAL.UPDATED_AT',
            type: 'date'
        },
        {
            field: 'createdByName',
            headerName: 'GENERAL.CREATED_BY',
            type: 'user',
            colId: 'createdBy'
        },
        {
            field: 'updatedByName',
            headerName: 'GENERAL.UPDATED_BY',
            type: 'user',
            colId: 'updatedBy'
        }
    ];
    title = 'MENU.REFERENCE.TECHNICAL_GUIDES.HANDBOOK_FOR_ASSESSING_THE_LEVEL_OF_ELECTRICITY_LOSSES_IN_NETWORKS';
    request = new ReferenceListRequest(ReferenceApiUrls.LEVELS_OF_ELECTRICITY_LOSES);

    addUpdate(id = null) {
        FormModalComponent.showModal(AssesingLossNetworkFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
}
