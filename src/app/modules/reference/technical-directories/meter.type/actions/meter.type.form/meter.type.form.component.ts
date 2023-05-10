import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {ReferenceDropDownRequest} from "../../../../basic/ReferenceDropDownRequest";
import {
  ASKUE_COMPATABILITY,
  MEASUREMENT_TYPE_ENUM,
  METER_VIEW,
  PHASE_TYPE
} from "@app/modules/reference/technical-directories/meter.type/enum/measurement.type.enum";
import {OptionsObj} from "@shared/helpers/form/interfaces/options";

@Component({
  templateUrl: './meter.type.form.component.html',
  styleUrls: ['./meter.type.form.component.scss']
})
export class MeterTypeFormComponent extends BasicModalForm {


  
  override form = new FormGroup({
    nameUz: new FormControl(null, [Validators.required]),
    code: new FormControl(null, [Validators.required]),
    status: new FormControl(true, [Validators.required]),
    nameRu: new FormControl(null, []),
    nameCrl: new FormControl(null, []),
    legalConsumerAmount: new FormControl(null, []),
    accuracyClass: new FormControl(null, [Validators.required]),
    admissibleCurrentAmper: new FormControl(null, [Validators.required]),
    meterCapacity: new FormControl(null, [Validators.required]),
    meterView: new FormControl(null, [Validators.required]),
    measurementType: new FormControl(null, [Validators.required]),
    askueCompatibility: new FormControl(null, [Validators.required]),
    multiTariff: new FormControl(null, [Validators.required]),
    realMeter: new FormControl(null, [Validators.required]),
    phaseType: new FormControl(null, [Validators.required]),
    permissibleVoltage: new FormControl(null, [Validators.required]),
    transformationCoefficient: new FormControl(null, [Validators.required]),
    distributionPeriod: new FormControl(null, [Validators.required]),
    meterManufacturerId: new FormControl(null, []),
    detail: new FormControl(null, []),
   });
  measurementTypeOption = [
    {
      id:MEASUREMENT_TYPE_ENUM.ACTIVE,
      name:this.translate.translate("GENERAL.ACTIVE")

    },
    {
      id:MEASUREMENT_TYPE_ENUM.REACTIVE,
      name:this.translate.translate("GENERAL.REACTIVE")
    },
    {
      id:MEASUREMENT_TYPE_ENUM.ACTIVE_REACTIVE,
      name:this.translate.translate("GENERAL.ACTIVE_REACTIVE")
    },
  ]
  meterManufacturesRequest = new ReferenceDropDownRequest(ReferenceApiUrls.METER_MANUFACTURER);
  override request = new ReferenceFormRequest(ReferenceApiUrls.METER_TYPE);

  options: OptionsObj[] = [{
    id: PHASE_TYPE.SINGLE_PHASE,
    name: 'REFERENCE.1PHASE',
  },{
    id: PHASE_TYPE.THREE_PHASE,
    name: 'REFERENCE.3PHASE',
  }]
  meterView: OptionsObj[] = [{
    id: METER_VIEW.ELECTRONIC,
    name: 'REFERENCE.ELECTRONIC',
  },{
    id: METER_VIEW.DISK,
    name: 'REFERENCE.DISK',
  }]
  YesNoSmart: OptionsObj[] = [{
    id: ASKUE_COMPATABILITY.YES,
    name: 'GENERAL.YES',
  },{
    id: ASKUE_COMPATABILITY.NO,
    name: 'GENERAL.NO',
  },{
    id: ASKUE_COMPATABILITY.SMARTCARD,
    name: 'GENERAL.SMARTCARD',
  }
  ]
}
