import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";

@Component({
  templateUrl: './ownership.classifier.form.component.html',
  styleUrls: ['./ownership.classifier.form.component.scss']
})
export class OwnershipClassifierFormComponent extends BasicModalForm {

  
  override form = new FormGroup({
    nameUz: new FormControl(null, [Validators.required]),
    code: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    status: new FormControl(true, [Validators.required]),
   });

  override request = new ReferenceFormRequest(ReferenceApiUrls.OWNERSHIP_CLASSIFIER);
}
