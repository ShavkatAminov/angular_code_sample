import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {ReferenceDropDownRequest} from "../../../../basic/ReferenceDropDownRequest";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";

@Component({
  templateUrl: './bank.mfos.form.component.html',
  styleUrls: ['./bank.mfos.form.component.scss']
})
export class BankMfosFormComponent extends BasicModalForm {

  override form = new FormGroup({
    regionCode: new FormControl(null, [Validators.required]),
    bankId: new FormControl(null, [Validators.required]),
    bankMfo: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    nameUz: new FormControl(null, [Validators.required]),
    status: new FormControl(true, [Validators.required]),
  });

  override request = new ReferenceFormRequest(ReferenceApiUrls.BANK_MFOS);
  currenciesRegions = new ReferenceDropDownRequest(ReferenceApiUrls.REGIONS);
  currenciesBank = new ReferenceDropDownRequest(ReferenceApiUrls.BANKS);

  override beforeSave() {
    super.beforeSave();
    this.request.body.regionCode = parseInt(this.request.body.regionCode);
    this.request.body.bankId = parseInt(this.request.body.bankId);
  }
}
