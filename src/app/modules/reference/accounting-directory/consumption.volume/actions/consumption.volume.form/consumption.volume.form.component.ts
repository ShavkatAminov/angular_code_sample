import { Component } from '@angular/core';
import {HttpClientService} from "../../../../../../shared/helpers/service/http/http.client.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "../../../../../../shared/helpers/form/modal/basic.modal.form";
import {TranslocoService} from "@ngneat/transloco";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {ReferenceDropDownRequest, RegistersDropDownRequest} from "../../../../basic/ReferenceDropDownRequest";
import {AlertServiceComponent} from "../../../../../../shared/helpers/alerts/services/alert.service.component";

@Component({
  selector: 'app-consumption.volume.form',
  templateUrl: './consumption.volume.form.component.html',
  styleUrls: ['./consumption.volume.form.component.scss']
})
export class ConsumptionVolumeFormComponent extends BasicModalForm {

  
  override form = new FormGroup({
    code: new FormControl(null, [Validators.required]),
    nameUz: new FormControl(null, [Validators.required]),
    toKWhInterval: new FormControl(null, [Validators.required]),
    fromKWhInterval: new FormControl(null, [Validators.required]),
    tariffId: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    status: new FormControl(null, [Validators.required]),
    baseTariffId: new FormControl(null, [Validators.required]),
    activationPeriod: new FormControl(null, [Validators.required]),
  });

  override request = new ReferenceFormRequest(ReferenceApiUrls.CONSUMPTION_VOLUME);

  autoBasicTariff = new RegistersDropDownRequest(ReferenceApiUrls.BASE_TARIFF_CODES)
  autoTariff = new ReferenceDropDownRequest(ReferenceApiUrls.TARIFFS)
}