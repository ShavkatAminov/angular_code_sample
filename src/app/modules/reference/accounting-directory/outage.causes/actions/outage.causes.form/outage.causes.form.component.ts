import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";

@Component({
  templateUrl: './outage.causes.form.component.html',
  styleUrls: ['./outage.causes.form.component.scss']
})
export class OutageCausesFormComponent extends BasicModalForm{

  
  override form = new FormGroup({
    nameUz: new FormControl(null, [Validators.required]),
    nameRu: new FormControl(null, []),
    nameCrl: new FormControl(null, []),
    status: new FormControl(true, [Validators.required]),
});

  override request = new ReferenceFormRequest(ReferenceApiUrls.OUTAGE_CAUSES);
}
