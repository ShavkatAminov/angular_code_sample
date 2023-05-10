import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";

@Component({
  selector: 'app-regions.form',
  templateUrl: './regions.form.component.html',
  styleUrls: ['./regions.form.component.scss']
})
export class RegionsFormComponent extends BasicModalForm {
  
  override form = new FormGroup({
    code: new FormControl(null, [Validators.required]),
    nameUz: new FormControl(null, [Validators.required]),
    status: new FormControl(true, [Validators.required]),
  });

  override request = new ReferenceFormRequest(ReferenceApiUrls.REGIONS);

  pattern = {
    N: {
      pattern: new RegExp('^[1-9]'),

    },
    '9': {
      pattern: new RegExp('^[0-9]'),

    },
  };

}
