import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";

@Component({
  selector: 'app-workplace.form',
  templateUrl: './enterprise.by.payment.types.form.component.html',
  styleUrls: ['./enterprise.by.payment.types.form.component.scss']
})

export class EnterpriseByPaymentTypesFormComponent extends BasicModalForm {

  override form = new FormGroup({
    code: new FormControl(null, [Validators.required,Validators.maxLength(2)]),
    shortName: new FormControl(null, [Validators.required,Validators.maxLength(100)]),
    fullName: new FormControl(null, [Validators.required,Validators.maxLength(200)]),
    status: new FormControl(true, [Validators.required]),
  });

  override request = new ReferenceFormRequest(ReferenceApiUrls.ENTERPRISE_BY_PAYMENT_TYPES);

}
