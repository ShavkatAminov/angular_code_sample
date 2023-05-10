import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";

@Component({
  selector: 'app-consumption.groups.form',
  templateUrl: './consumption.groups.form.component.html',
  styleUrls: ['./consumption.groups.form.component.scss']
})
export class ConsumptionGroupsFormComponent extends BasicModalForm {
  

  override form = new FormGroup({
    code: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    nameUz: new FormControl(null, [Validators.required]),
    status: new FormControl(true, [Validators.required]),
  });

  override request = new ReferenceFormRequest(ReferenceApiUrls.CONSUMPTION_GROUPS);

  override beforeSave() {
    super.beforeSave();
  }
}
