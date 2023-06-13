import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";

@Component({
  templateUrl: './economic.activity.type.form.component.html',
  styleUrls: ['./economic.activity.type.form.component.scss']
})
export class EconomicActivityTypeFormComponent extends BasicModalForm {


  override form = new FormGroup({
    code: new FormControl(null, [Validators.required, Validators.maxLength(5)]),
    nameRu: new FormControl(null, [Validators.required]),
    nameUz: new FormControl(null, [Validators.required]),
    nameCrl: new FormControl(null, [Validators.required]),
    status: new FormControl(true, [Validators.required]),
   });

  pattern = {

    R: {
      pattern: new RegExp('^[А-Яа-яЁё, 0-9]'),
    },
  };

  override request = new ReferenceFormRequest(ReferenceApiUrls.ECONOMIC_ACTIVITY_TYPE);
}
