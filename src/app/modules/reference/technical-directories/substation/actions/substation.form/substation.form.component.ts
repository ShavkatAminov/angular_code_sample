import { Component } from '@angular/core';
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {ReferenceDropDownRequest} from "../../../../basic/ReferenceDropDownRequest";

@Component({
  selector: 'app-substation.form',
  templateUrl: './substation.form.component.html',
  styleUrls: ['./substation.form.component.scss']
})
export class SubstationFormComponent extends BasicModalForm{
  
  override form = new FormGroup({
    code: new FormControl(null, [Validators.required]),
    nameUz: new FormControl(null, [Validators.required]),
    transformerTypeId: new FormControl(null, [Validators.required]),
    districtId: new FormControl(null, [Validators.required]),
    presenceOfMeter: new FormControl(null, [Validators.required]),
    status: new FormControl(true, [Validators.required]),
  });

  override request = new ReferenceFormRequest(ReferenceApiUrls.SUBSTATION);
  transformerType = new ReferenceDropDownRequest(ReferenceApiUrls.TRANSFORMER_TYPES)
  district = new ReferenceDropDownRequest(ReferenceApiUrls.DISTRICTS)
}
