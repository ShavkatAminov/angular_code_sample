import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {OptionsObj} from "@shared/helpers/form/interfaces/options";

@Component({
  templateUrl: './transformer.types.form.component.html',
  styleUrls: ['./transformer.types.form.component.scss']
})
export class TransformerTypesFormComponent extends BasicModalForm {

  

  override form = new FormGroup({
    nameUz: new FormControl(null, [Validators.required]),
    nameRu: new FormControl(null, []),
    nameCrl: new FormControl(null, []),
    status: new FormControl(true, [Validators.required]),
    ptesRepSign: new FormControl(null, [Validators.required]),
    windingSign: new FormControl(null, [Validators.required]),
    ratedPower: new FormControl(null, [Validators.required]),
    highVoltage: new FormControl(null, [Validators.required]),
    middleVoltage: new FormControl(null, [Validators.required]),
    lowVoltage: new FormControl(null, [Validators.required]),
    lossIdlePower: new FormControl(null, [Validators.required]),
    lossShortCircuit: new FormControl(null, [Validators.required]),
    lossHighToLowTransition: new FormControl(null, [Validators.required]),
    lossMediumToLowTransition: new FormControl(null, [Validators.required]),
    lossNoLoadCurrent: new FormControl(null, [Validators.required]),
    numberPer: new FormControl(null, [Validators.required]),
  });

  options: OptionsObj[] = [{
    id: 'P',
    name: 'REFERENCE.PTES',
  },{
    id: 'R',
    name: 'REFERENCE.REP',
  }]

  override request = new ReferenceFormRequest(ReferenceApiUrls.TRANSFORMER_TYPES);

  override beforeSave() {
    super.beforeSave();
    this.request.body.windingSign = parseInt(this.request.body.windingSign);
    this.request.body.ratedPower = parseInt(this.request.body.ratedPower);
  }
}
