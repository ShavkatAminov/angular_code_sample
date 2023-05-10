import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import { ReferenceApiUrls } from 'app/modules/reference/referenceApiUrls';
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";

@Component({
  selector: 'app-banks.directory.form',
  templateUrl: './banks.form.component.html',
  styleUrls: ['./banks.form.component.scss']
})
export class BanksFormComponent extends BasicModalForm {

  

  override form = new FormGroup({
    code: new FormControl(null, [Validators.required, Validators.maxLength(3)]),
    nameUz: new FormControl(null, [Validators.required]),
    status: new FormControl(true, [Validators.required]),
    paymentRequirement: new FormControl(null,[Validators.required])
  });

  override request = new ReferenceFormRequest(ReferenceApiUrls.BANKS);

  override beforeSave() {
    super.beforeSave();
    this.request.body.code = parseInt(this.request.body.code);
  }

}
