import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";

@Component({
  templateUrl: './habitation.divisions.form.component.html',
  styleUrls: ['./habitation.divisions.form.component.scss']
})
export class HabitationDivisionsFormComponent extends BasicModalForm {

  
  override form = new FormGroup({
    nameUz: new FormControl(null, [Validators.required]),
    code: new FormControl(null, [Validators.required]),
    status: new FormControl(null, [Validators.required]),
   });

  override request = new ReferenceFormRequest(ReferenceApiUrls.HABITATION_DIVISIONS);
}
