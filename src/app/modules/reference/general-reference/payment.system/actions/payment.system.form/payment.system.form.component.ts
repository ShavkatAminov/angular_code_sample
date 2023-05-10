import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";

@Component({
  templateUrl: './payment.system.form.component.html',
})
export class PaymentSystemFormComponent extends BasicModalForm {

  override form = new FormGroup({
    nameUz: new FormControl(null, [Validators.required, Validators.maxLength(200)]),
    code: new FormControl(null, [Validators.required, Validators.maxLength(10)]),
    status: new FormControl(null, [Validators.required, ]),
    prefix: new FormControl(null, [Validators.required, Validators.maxLength(5)]),
    shortName: new FormControl(null, [Validators.required, Validators.maxLength(20)]),
    percent: new FormControl(null, [Validators.required, ]),
   });
  override request = new ReferenceFormRequest(ReferenceApiUrls.PAYMENT_SYSTEM);
}
