import { Component } from '@angular/core';
import {BasicModalForm} from "../../../../../../shared/helpers/form/modal/basic.modal.form";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";

@Component({
  selector: 'app-business.activities.form',
  templateUrl: './business.activities.form.component.html',
  styleUrls: ['./business.activities.form.component.scss']
})
export class BusinessActivitiesFormComponent extends BasicModalForm{
  override form = new FormGroup({
    code: new FormControl(null, [Validators.required, Validators.maxLength(20)]),
    nameUz: new FormControl(null, [Validators.required,Validators.maxLength(200)]),
    shortName: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
    status: new FormControl(null, [Validators.required]),
  });
  override request = new ReferenceFormRequest(ReferenceApiUrls.BUSINESS_ACTIVITY);
}
