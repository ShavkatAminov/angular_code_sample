import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "../../../../../../shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {ReferenceDropDownRequest, RegistersDropDownRequest} from "../../../../basic/ReferenceDropDownRequest";

@Component({
  selector: "app-tariffs.form.component",
  templateUrl: './tariffs.form.component.html',
  styleUrls: ['./tariffs.form.component.scss']
})
export class TariffsFormComponent extends BasicModalForm {

  
  override form = new FormGroup({
    nameUz: new FormControl(null, [Validators.required]),
    code: new FormControl(null, [Validators.required]),
    status: new FormControl(null, [Validators.required]),
    tariffGroupId: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    nds: new FormControl(null, [Validators.required]),
    isDefault: new FormControl(null, [Validators.required]),
    baseTariffCodeId: new FormControl(null, []),
    timezoneId: new FormControl(null, []),
    indicationTypeId: new FormControl(null, []),
    deactivationDate: new FormControl(null, []),
   });

  override request = new ReferenceFormRequest(ReferenceApiUrls.TARIFFS);

  autoTariffGroup = new ReferenceDropDownRequest(ReferenceApiUrls.TARIFF_GROUP);

  autoInticatorType = new ReferenceDropDownRequest(ReferenceApiUrls.INDICATION_TYPES);

  autoBaseRateCodeId = new RegistersDropDownRequest(ReferenceApiUrls.BASE_TARIFF_CODES)

  autoTimeZones = new ReferenceDropDownRequest(ReferenceApiUrls.TIMEZONES);
}
