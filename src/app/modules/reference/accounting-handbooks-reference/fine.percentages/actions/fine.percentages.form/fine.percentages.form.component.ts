import { Component } from '@angular/core';
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountingSettlementLCApiUrls} from "@app/modules/accounting-settlement-lc/accountingSettlementLCApiUrls";
import {
  AccountingSettlementLCFormRequest
} from "@app/modules/accounting-settlement-lc/basic/AccountingSettlementLCFormRequest";

@Component({
  templateUrl: './fine.percentages.form.component.html',
  styleUrls: ['./fine.percentages.form.component.scss']
})
export class FinePercentagesFormComponent extends BasicModalForm{
  override form = new FormGroup({
    percentage: new FormControl(null, [Validators.required]),
    status: new FormControl(true, [Validators.required]),
  });

  override request = new AccountingSettlementLCFormRequest(AccountingSettlementLCApiUrls.FINE_PERCENTAGES);
}
