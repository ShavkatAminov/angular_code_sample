import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReferenceDropDownRequest} from "../../../../basic/ReferenceDropDownRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";

@Component({
  templateUrl: './managers.form.component.html',
  styleUrls: ['./managers.form.component.scss']
})
export class ManagersFormComponent extends BasicModalForm {


  
  override form = new FormGroup({
    code: new FormControl(null, [Validators.required]),
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, []),
    middleName: new FormControl(null, []),
    managementLevelId: new FormControl(null, [Validators.required]),
    managementTypeId: new FormControl(null, [Validators.required]),
    mobilePhone: new FormControl(null, [Validators.required, Validators.maxLength(12)]),
    status: new FormControl(null, [Validators.required]),
});

  override request = new ReferenceFormRequest(ReferenceApiUrls.MANAGERS);
  managementLevelDropRequest = new ReferenceDropDownRequest(ReferenceApiUrls.MANAGEMENT_LEVELS);
  managementTypeDropRequest = new ReferenceDropDownRequest(ReferenceApiUrls.MANAGEMENT_TYPES);
  override beforeSave() {
    super.beforeSave();
    this.request.body.managementLevelId = parseInt(this.request.body.managementLevelId);
    this.request.body.managementTypeId = parseInt(this.request.body.managementTypeId);
  }
}
