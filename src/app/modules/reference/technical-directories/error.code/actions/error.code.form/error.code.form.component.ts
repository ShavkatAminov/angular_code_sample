import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";

@Component({
  selector: 'app-error.code.form',
  templateUrl: './error.code.form.component.html',
  styleUrls: ['./error.code.form.component.scss']
})
export class ErrorCodeFormComponent extends BasicModalForm {

  
  override form = new FormGroup({
    code: new FormControl(null, [Validators.required]),
    nameUz: new FormControl(null, [Validators.required]),
    status: new FormControl(true, [Validators.required]),
   });

  override request = new ReferenceFormRequest(ReferenceApiUrls.ERROR_CODE);
}
