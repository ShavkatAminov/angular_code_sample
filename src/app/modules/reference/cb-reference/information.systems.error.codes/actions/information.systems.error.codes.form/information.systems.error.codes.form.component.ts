import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { BasicModalForm } from 'app/shared/helpers/form/modal/basic.modal.form';
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";

@Component({
  templateUrl: './information.systems.error.codes.form.component.html',
  styleUrls: ['./information.systems.error.codes.form.component.scss']
})
export class InformationSystemsErrorCodesFormComponent extends BasicModalForm {

  
  override form = new FormGroup({
    nameUz: new FormControl(null, [Validators.required]),
    code: new FormControl(null, [Validators.required]),
    status: new FormControl(true, [Validators.required]),
   });

  override request = new ReferenceFormRequest(ReferenceApiUrls.INFORMATION_SYSTEMS_ERROR_CODES);
}
