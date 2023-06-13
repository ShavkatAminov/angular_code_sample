import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {OptionsObj} from "@shared/helpers/form/interfaces/options";

@Component({
  templateUrl: './meter.state.form.component.html',
})
export class MeterStateFormComponent extends BasicModalForm {

  override form = new FormGroup({
    code: new FormControl(null, [Validators.required, Validators.maxLength(10)]),
    nameUz: new FormControl(null, [Validators.required, Validators.maxLength(200)]),
    state: new FormControl(null, [Validators.required, ]),
    status: new FormControl(null, [Validators.required, ]),
  });

  optionsState: OptionsObj[] = [
      { id: true, name: "MENU.REFERENCE.GENERAL_GUIDES.USED" },
      { id: false, name: "MENU.REFERENCE.GENERAL_GUIDES.NOT_USED" }
  ]


  override request = new ReferenceFormRequest(ReferenceApiUrls.METER_STATE);
}
