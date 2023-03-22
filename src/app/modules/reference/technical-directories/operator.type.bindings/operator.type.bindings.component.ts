import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {BasicReferencePage} from "../../basic.reference.page";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {
    OperatorTypeBindingFormComponent
} from "./actions/operator.type.binding.form/operator.type.binding.form.component";
import {basicTemplate} from "../../basic/basicTemplate";

import {FilterField, FilterFieldGroup} from 'app/shared/helpers/filter/filter.component/filterField';
import {ReferenceDropDownRequest} from "../../basic/ReferenceDropDownRequest";

@Component({
    template: basicTemplate(),
})
export class OperatorTypeBindingsComponent extends BasicReferencePage {
    columnDefs: ColDef[] = [
        {
            field: 'code',
            headerName: 'GENERAL.CODE_NUMBER',
        },
        {
            field: 'nameUz',
            headerName: 'GENERAL.OPERATOR_NAME',
            flex: 15,
        },
        {
            colId: 'providerId',
            floatingFilterComponentParams: {
                type: 'autocomplete',
                request: new ReferenceDropDownRequest(ReferenceApiUrls.PROVIDER_TYPE),
            },
            field: 'providerType.nameUz',
            headerName: 'GENERAL.PROVIDER_NAME',
            flex: 15,
        },
        {
            floatingFilterComponentParams: {
                type: 'status',
            },
            field: 'status',
            headerName: 'GENERAL.STATUS',
            type: 'status'
        },
        {
            field: 'login',
            headerName: 'GENERAL.LOGIN',
            flex: 20,
        },
        {
            floatingFilterComponentParams: {
                type: 'yesNo',
            },
            field: 'receiveSmsFromRes',
            headerName: 'GENERAL.RECEIVE_SMS_FROM_RES',
        },
    ];

    title = 'MENU.REFERENCE.TECHNICAL_GUIDES.OPERATOR_TYPE_BINDING';
    request = new ReferenceListRequest(ReferenceApiUrls.OPERATOR_TYPE_BINDINGS);

    addUpdate(id = null) {
        FormModalComponent.showModal(OperatorTypeBindingFormComponent, this.title, id, SizeModal.sm).subscribe(res => {
            if (res)
                this.reload();
        });
    }

    override filter: FilterFieldGroup = {
        code: new FilterField('GENERAL.CODE_NUMBER', 'input'),
        nameUz: new FilterField('GENERAL.OPERATOR_NAME', 'input'),
        providerId: new FilterField('GENERAL.PROVIDER_NAME', 'autocomplete', new ReferenceDropDownRequest(ReferenceApiUrls.PROVIDER_TYPE)),
        status: new FilterField('GENERAL.STATUS', 'status'),
        receiveSmsFromRes: new FilterField('GENERAL.RECEIVE_SMS_FROM_RES', 'yesNo'),
    }
}
