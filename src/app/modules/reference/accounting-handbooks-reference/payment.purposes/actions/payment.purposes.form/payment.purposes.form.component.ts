import { Component } from '@angular/core';
import {TranslocoService} from "@ngneat/transloco";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "../../../../../../shared/helpers/form/modal/basic.modal.form";
import {HttpClientService} from "../../../../../../shared/helpers/service/http/http.client.service";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {
  AccountingSettlemenHCFormRequest
} from "../../../../../accounting-settlement-hc/basic/AccountingSettlemenHCFormRequest";
import {AlertServiceComponent} from "../../../../../../shared/helpers/alerts/services/alert.service.component";

@Component({
  selector: 'app-payment.purposes.form',
  templateUrl: './payment.purposes.form.component.html',
  styleUrls: ['./payment.purposes.form.component.scss']
})
export class PaymentPurposesFormComponent extends BasicModalForm {

  
  override form = new FormGroup({
    code: new FormControl(null, [Validators.required, Validators.maxLength(20)]),
    nameUz: new FormControl(null, [Validators.required,Validators.maxLength(200)]),
    status: new FormControl(null, [Validators.required]),
  });

  override request = new AccountingSettlemenHCFormRequest(ReferenceApiUrls.PAYMENT_PURPOSES);
}
