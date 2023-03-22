import { Component } from '@angular/core';
import {HttpClientService} from "../../../../../../shared/helpers/service/http/http.client.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TranslocoService} from "@ngneat/transloco";
import {BasicModalForm} from "../../../../../../shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {AlertServiceComponent} from "../../../../../../shared/helpers/alerts/services/alert.service.component";

@Component({
  selector: 'app-payment.document.type.form',
  templateUrl: './payment.document.type.form.component.html',
  styleUrls: ['./payment.document.type.form.component.scss']
})
export class PaymentDocumentTypeFormComponent extends BasicModalForm {

  
  override form = new FormGroup({
    code: new FormControl(null, [Validators.required]),
    nameUz: new FormControl(null, [Validators.required]),
    nameRu: new FormControl(null, []),
    nameCrl: new FormControl(null, []),
    specialAccount: new FormControl(null, []),
    checkingAccountAmount: new FormControl(null, []),
    specialAccountTranche: new FormControl(null, []),
    status: new FormControl(null, [Validators.required]),
});

  override request = new ReferenceFormRequest(ReferenceApiUrls.PAYMENT_DOCUMENT_TYPE);

  override beforeSave() {
    super.beforeSave();
    this.request.body.code = parseInt(this.request.body.code);
  }
}
