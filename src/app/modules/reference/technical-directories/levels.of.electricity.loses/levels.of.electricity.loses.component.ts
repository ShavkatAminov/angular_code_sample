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

import {FilterField, FilterFieldGroup } from 'app/shared/helpers/filter/filter.component/filterField';
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";

@Component({
  template: basicTemplate(),
})
export class LevelsOfElectricityLosesComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {
            floatingFilterComponentParams: {
                type: 'date',
            },
            field: 'validityDate', headerName: 'REFERENCE.VALIDITY_DATE', minWidth: 150, type: 'date'},
        {
            colId: 'coatoId',
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request:  new ReferenceDropDownRequest(ReferenceApiUrls.COATO_BRANCHES),
            },
            field: 'coatoBranches.code', headerName: 'REFERENCE.COATO', minWidth: 150},
        {
            colId: 'standardValuesId',
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request:  new ReferenceDropDownRequest(ReferenceApiUrls.COATO_BRANCHES),
            },
            field: 'standardValues.code', headerName: 'REFERENCE.STANDARD_VALUE_ID', minWidth: 150},
        {field: 'networkSuppliedEnery', headerName: 'REFERENCE.NETWORK_SUPPIED_ENERGY', minWidth: 150},
        {field: 'losses', headerName: 'REFERENCE.AVERAGE_LOSS_IN_GENERAL', minWidth: 150},
        {field: 'avgLossPercentage', headerName: 'REFERENCE.AVERAGE_LOSS_IN_GENERAL_IN_PERCENTAGE', minWidth: 150},
        {field: 'minimumLoss', headerName: 'REFERENCE.MINIMUM_LOSS_IN_GENERAL', minWidth: 150},
        {field: 'minimumLossPercentage', headerName: 'REFERENCE.MINIMUM_LOSS_IN_GENERAL_IN_PERCENTAGE', minWidth: 150},
        {field: 'maximumLoss', headerName: 'REFERENCE.MAXIMUM_LOSS_IN_GENERAL', minWidth: 150},
        {field: 'maximumLossPercentage', headerName: 'REFERENCE.MAXIMUM_LOSS_IN_GENERAL_IN_PERCENTAGE', minWidth: 150},
        {field: 'createdAt', headerName: 'GENERAL.CREATED_AT', minWidth: 150, type: 'date'},
        {field: 'updatedAt', headerName: 'GENERAL.UPDATED_AT', minWidth: 150, type: 'date'},
        {field: 'createdby', headerName: 'GENERAL.CREATED_BY', minWidth: 150},
        {field: 'updatedby', headerName: 'GENERAL.UPDATED_BY', minWidth: 150}
    ];
    title = 'MENU.REFERENCE.TECHNICAL_GUIDES.HANDBOOK_FOR_ASSESSING_THE_LEVEL_OF_ELECTRICITY_LOSSES_IN_NETWORKS';
    request = new ReferenceListRequest(ReferenceApiUrls.LEVELS_OF_ELECTRICITY_LOSES);

    addUpdate(id = null) {
        FormModalComponent.showModal(AssesingLossNetworkFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
  override filter: FilterFieldGroup = {
    validityDate: new FilterField('REFERENCE.VALIDITY_DATE', 'date'),
    coatoId: new FilterField('REFERENCE.COATO', 'autocomplete', new ReferenceDropDownRequest(ReferenceApiUrls.COATO_BRANCHES)),
    networkSuppliedEnery: new FilterField('REFERENCE.NETWORK_SUPPIED_ENERGY', 'input'),
    losses: new FilterField('REFERENCE.AVERAGE_LOSS_IN_GENERAL', 'input'),
    avgLossPercentage: new FilterField('REFERENCE.AVERAGE_LOSS_IN_GENERAL_IN_PERCENTAGE', 'input'),
    minimumLoss: new FilterField('REFERENCE.MINIMUM_LOSS_IN_GENERAL', 'input'),
    minimumLossPercentage: new FilterField('REFERENCE.MINIMUM_LOSS_IN_GENERAL_IN_PERCENTAGE', 'input'),
    maximumLoss: new FilterField('REFERENCE.MAXIMUM_LOSS_IN_GENERAL', 'input'),
    maximumLossPercentage: new FilterField('REFERENCE.MAXIMUM_LOSS_IN_GENERAL_IN_PERCENTAGE', 'input'),
    standardValuesId: new FilterField('REFERENCE.STANDARD_VALUE_ID', 'autocomplete', new ReferenceDropDownRequest(ReferenceApiUrls.STANDARD_VALUES)),
    status: new FilterField('GENERAL.STATUS', 'status'),
  }
}
