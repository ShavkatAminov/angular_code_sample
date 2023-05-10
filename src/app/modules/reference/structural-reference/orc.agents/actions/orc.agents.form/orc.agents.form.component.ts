import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";

@Component({
  selector: 'app-orc.agents.form',
  templateUrl: './orc.agents.form.component.html',
  styleUrls: ['./orc.agents.form.component.scss']
})
export class OrcAgentsFormComponent extends BasicModalForm {
  
  override form = new FormGroup({
    coatoCode: new FormControl(null, [Validators.required]),
    code: new FormControl(null, [Validators.required]),
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    middleName: new FormControl(null, [Validators.required]),
    mobilePhone: new FormControl(null, [Validators.required]),
    status: new FormControl(true, [Validators.required]),
  });

  override request = new ReferenceFormRequest(ReferenceApiUrls.ORC_AGENT);
}
