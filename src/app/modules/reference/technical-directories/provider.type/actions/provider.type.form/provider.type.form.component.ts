import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";

@Component({
  selector: 'app-provider-type-form',
  templateUrl: './provider.type.form.component.html',
  styleUrls: ['./provider.type.form.component.scss']
})

export class ProviderTypeFormComponent extends BasicModalForm {
  

  override form = new FormGroup({
    nameUz: new FormControl(null, [Validators.required]),
    url: new FormControl(null, []),
    status: new FormControl(true, [Validators.required]),
  });

  override request = new ReferenceFormRequest(ReferenceApiUrls.PROVIDER_TYPE);

  override beforeSave() {
    super.beforeSave();
    this.request.body.code = parseInt(this.request.body.code);
  }
}
