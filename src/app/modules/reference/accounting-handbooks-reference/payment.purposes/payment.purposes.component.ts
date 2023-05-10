import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {BasicTablePage} from "@shared/helpers/table/basic/basic.table.page";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {PaymentPurposesFormComponent} from "./actions/payment.purposes.form/payment.purposes.form.component";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {
    AccountingSettlemenHCListRequest
} from "../../../accounting-settlement-hc/basic/AccountingSettlemenHCListRequest";
import {basicTemplate} from "../../basic/basicTemplate";

@Component({
    template: basicTemplate(),
})
export class PaymentPurposesComponent extends BasicTablePage {
    columnDefs: ColDef[] = [
        {
            flex:2,
            field: 'code',
            headerName: 'GENERAL.CODE',
        },
        {
            field: 'nameUz',
            headerName: 'GENERAL.NAME',
        },
        {
            flex:4,
            field: 'status',
            headerName: 'GENERAL.STATUS',
            type: 'status',
        },
    ];

    title = 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.PAYMENT_PURPOSES';
    request = new AccountingSettlemenHCListRequest(ReferenceApiUrls.PAYMENT_PURPOSES);

    addUpdate(id = null) {
        FormModalComponent.showModal(PaymentPurposesFormComponent, this.title, id, SizeModal.sm).subscribe(res => {
            if (res)
                this.reload();
        });
    }
}
