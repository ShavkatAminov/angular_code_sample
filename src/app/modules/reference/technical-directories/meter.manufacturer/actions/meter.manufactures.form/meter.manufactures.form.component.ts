import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";

@Component({
  selector: 'app-meter.manufactures.form',
  templateUrl: './meter.manufactures.form.component.html',
  styleUrls: ['./meter.manufactures.form.component.scss']
})
export class MeterManufacturesFormComponent extends BasicModalForm {

  
  override form = new FormGroup({
    nameUz: new FormControl(null, [Validators.required]),
    status: new FormControl(true, [Validators.required]),
    amountOfSignsInSerialNumber: new FormControl(null, [Validators.required, Validators.maxLength(10)]),
    numberLetter: new FormControl(null, [Validators.maxLength(10)]),
    presenceOfSymbols: new FormControl(true, [Validators.required]),
  });

  override request = new ReferenceFormRequest(ReferenceApiUrls.METER_MANUFACTURER);

  override beforeSave() {
    super.beforeSave()
    this.request.body.amountOfSignsInSerialNumber = parseInt(this.request.body.amountOfSignsInSerialNumber);
  }
}
