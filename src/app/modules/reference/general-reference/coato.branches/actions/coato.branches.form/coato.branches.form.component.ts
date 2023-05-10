import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {ReferenceDropDownRequest} from "../../../../basic/ReferenceDropDownRequest";

@Component({
  templateUrl: './coato.branches.form.component.html',
  styleUrls: ['./coato.branches.form.component.scss']
})
export class CoatoBranchesFormComponent extends BasicModalForm {

  
  override form = new FormGroup({
    nameUz: new FormControl(null, [Validators.required]),
    code: new FormControl(null, [Validators.required]),
    status: new FormControl(true, [Validators.required]),
    regionId: new FormControl(null, []),
    districtId: new FormControl(null, [Validators.required]),
    levelId: new FormControl(null, [Validators.required]),
   });

  override request = new ReferenceFormRequest(ReferenceApiUrls.COATO_BRANCHES);
  districtIdRequest = new ReferenceDropDownRequest(ReferenceApiUrls.DISTRICTS);
  regionRequest = new ReferenceDropDownRequest(ReferenceApiUrls.REGIONS);
  levelRequest = new ReferenceDropDownRequest(ReferenceApiUrls.MANAGEMENT_LEVELS);
}
