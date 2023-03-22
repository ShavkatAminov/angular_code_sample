import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceDropDownRequest} from "../../../../basic/ReferenceDropDownRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";

@Component({
  selector: 'app-operator.type.binding.form',
  templateUrl: './operator.type.binding.form.component.html',
  styleUrls: ['./operator.type.binding.form.component.scss']
})
export class OperatorTypeBindingFormComponent extends BasicModalForm{
  
  override form = new FormGroup({
    code: new FormControl(null, [Validators.required]),
    nameUz: new FormControl(null, [Validators.required]),
    providerId: new FormControl(null, [Validators.required]),
    status: new FormControl(null, [Validators.required]),
    receiveSmsFromRes: new FormControl(null, [Validators.required]),
  });

  override request = new ReferenceFormRequest(ReferenceApiUrls.OPERATOR_TYPE_BINDINGS);
  providerNameRequest =  new ReferenceDropDownRequest(ReferenceApiUrls.PROVIDER_TYPE);

  override beforeSave() {
    this.request.body = this.form.value;
    this.request.body.providerId = parseInt(this.request.body.providerId);
  }
}
