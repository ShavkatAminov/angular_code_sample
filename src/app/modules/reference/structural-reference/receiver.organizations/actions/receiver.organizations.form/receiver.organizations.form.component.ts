import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {ReferenceDropDownRequest} from "../../../../basic/ReferenceDropDownRequest";

@Component({
  templateUrl: './receiver.organizations.form.component.html',
  styleUrls: ['./receiver.organizations.form.component.scss']
})
export class ReceiverOrganizationsFormComponent extends BasicModalForm {
  override form = new FormGroup({
    nameUz: new FormControl(null, [Validators.required]),
    code: new FormControl(null, [Validators.required]),
    status: new FormControl(null, [Validators.required]),
    sendersTypeId: new FormControl(null, [Validators.required]),
    paymentSystemId: new FormControl(null, [Validators.required]),
    mfo: new FormControl(null, [Validators.required]),
    account: new FormControl(null, [Validators.required]),
    percentage: new FormControl(null, [Validators.required]),
});

  override request = new ReferenceFormRequest(ReferenceApiUrls.RECEIVER_ORGANIZATIONS);
  currenciesAllSenderRequest = new ReferenceDropDownRequest(ReferenceApiUrls.SENDER_ORGANIZATION_TYPES);
  currenciesAllPaymentRequest = new ReferenceDropDownRequest(ReferenceApiUrls.PAYMENT_SYSTEM);

  override beforeSave() {
    this.request.body = this.form.value;
    this.request.body.sendersTypeId = parseInt(this.request.body.sendersTypeId);
    this.request.body.paymentSystemId = parseInt(this.request.body.paymentSystemId);
    this.request.body.account = parseInt(this.request.body.account);
    this.request.body.percentage = parseInt(this.request.body.percentage);
  }
}

