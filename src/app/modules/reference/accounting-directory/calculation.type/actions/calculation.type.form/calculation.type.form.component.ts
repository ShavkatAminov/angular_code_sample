import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";

@Component({
  templateUrl: './calculation.type.form.component.html',
  styleUrls: ['./calculation.type.form.component.scss']
})
export class CalculationTypeFormComponent extends BasicModalForm {

  
  override form = new FormGroup({
    code: new FormControl(null, [Validators.required]),
    nameUz: new FormControl(null, [Validators.required]),
    status: new FormControl(true, [Validators.required]),
});

  override request = new ReferenceFormRequest(ReferenceApiUrls.CALCULATION_TYPE);

  pattern = {
    N: {
      pattern: new RegExp('^[1-9]'),

    },
    '9': {
      pattern: new RegExp('^[0-9]'),

    },
  };

}
