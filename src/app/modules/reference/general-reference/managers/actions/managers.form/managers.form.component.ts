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
    firstName: new FormControl(null, [Validators.required,Validators.maxLength(50)]),
    lastName: new FormControl(null, [Validators.required,Validators.maxLength(50)]),
    middleName: new FormControl(null, [Validators.required,Validators.maxLength(50)]),
    managementLevelId: new FormControl(null, [Validators.required]),
    managementTypeId: new FormControl(null, [Validators.required]),
    mobilePhone: new FormControl(null, [Validators.required, Validators.maxLength(20)]),
    status: new FormControl(true, [Validators.required]),
});

  override request = new ReferenceFormRequest(ReferenceApiUrls.MANAGERS);
  managementLevelDropRequest = new ReferenceDropDownRequest(ReferenceApiUrls.MANAGEMENT_LEVELS, {
    pageable: {
      sort: ["code"],
      direction: 'ASC'
    }
  });
  managementTypeDropRequest = new ReferenceDropDownRequest(ReferenceApiUrls.MANAGEMENT_TYPES);
  override beforeSave() {
    super.beforeSave();
    this.request.body.managementLevelId = parseInt(this.request.body.managementLevelId);
    this.request.body.managementTypeId = parseInt(this.request.body.managementTypeId);
  }
}
