import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { TranslocoService } from '@ngneat/transloco';
import { HttpClientService } from 'app/shared/helpers/service/http/http.client.service';
import {BasicModalForm} from "../../../../../../shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {ReferenceDropDownRequest} from "../../../../basic/ReferenceDropDownRequest";
import {AlertServiceComponent} from "../../../../../../shared/helpers/alerts/services/alert.service.component";

@Component({
  templateUrl: './meter.type.form.component.html',
  styleUrls: ['./meter.type.form.component.scss']
})
export class MeterTypeFormComponent extends BasicModalForm {


  
  override form = new FormGroup({
    nameUz: new FormControl(null, [Validators.required]),
    nameRu: new FormControl(null, []),
    nameCrl: new FormControl(null, []),
    code: new FormControl(null, [Validators.required]),
    status: new FormControl(null, [Validators.required]),
    average: new FormControl(null, []),
    physicalConsumerAmount: new FormControl(null, []),
    legalConsumerAmount: new FormControl(null, []),
    admissibleCurrentAmper: new FormControl(null, [Validators.required]),
    meterCapacity: new FormControl(null, [Validators.required]),
    meterView: new FormControl(null, [Validators.required]),
    measurementType: new FormControl(null, [Validators.required]),
    askueCompatibility: new FormControl(null, [Validators.required]),
    multiTariff: new FormControl(null, [Validators.required]),
    realMeter: new FormControl(null, [Validators.required]),
    transferred: new FormControl(null, [Validators.required]),
    meterManufacturerId: new FormControl(null, []),
    detail: new FormControl(null, []),
   });
  meterManufacturesRequest = new ReferenceDropDownRequest(ReferenceApiUrls.METER_MANUFACTURER);
  override request = new ReferenceFormRequest(ReferenceApiUrls.METER_TYPE);
}
