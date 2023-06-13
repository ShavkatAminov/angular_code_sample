import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {ReferenceDropDownRequest} from "@app/modules/reference/basic/ReferenceDropDownRequest";

@Component({
  templateUrl: './brigades.form.component.html',
  styleUrls: ['./brigades.form.component.scss']
})
export class BrigadesFormComponent extends BasicModalForm {

  
  override form = new FormGroup({
    nameUz: new FormControl(null, [Validators.required]),
    byTypeId: new FormControl(null, [Validators.required]),
    code: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    status: new FormControl(true, [Validators.required]),
  });

  override request = new ReferenceFormRequest(ReferenceApiUrls.BRIGADES);
  consumerRequest = new ReferenceDropDownRequest(ReferenceApiUrls.CONSUMER_TYPE);
}
