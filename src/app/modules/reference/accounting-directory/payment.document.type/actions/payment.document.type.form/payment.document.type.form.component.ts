import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "../../../../../../shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";

@Component({
  selector: 'app-payment.document.type.form',
  templateUrl: './payment.document.type.form.component.html',
  styleUrls: ['./payment.document.type.form.component.scss']
})
export class PaymentDocumentTypeFormComponent extends BasicModalForm {

  
  override form = new FormGroup({
    nameUz: new FormControl(null, [Validators.required]),
    nameRu: new FormControl(null, []),
    nameCrl: new FormControl(null, []),
    specialAccount: new FormControl(true, []),
    checkingAccountAmount: new FormControl(true, []),
    specialAccountTranche: new FormControl(true, []),
    status: new FormControl(true, [Validators.required]),
});

  override request = new ReferenceFormRequest(ReferenceApiUrls.PAYMENT_DOCUMENT_TYPE);

  override beforeSave() {
    super.beforeSave();
    this.request.body.code = parseInt(this.request.body.code);
  }
}
