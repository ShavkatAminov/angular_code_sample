import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";

@Component({
  selector: 'app-utilities.form',
  templateUrl: './utilities.form.component.html',
  styleUrls: ['./utilities.form.component.scss']
})

export class UtilitiesFormComponent extends BasicModalForm {

  override form = new FormGroup({
    nameUz: new FormControl(null, [Validators.required,Validators.maxLength(100)]),
    status: new FormControl(true, [Validators.required]),
  });

  override request = new ReferenceFormRequest(ReferenceApiUrls.UTILITIES);

  override beforeSave() {
    super.beforeSave();
    this.request.body.code = parseInt(this.request.body.code);
  }
}
