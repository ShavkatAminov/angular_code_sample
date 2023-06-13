import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";

@Component({
  templateUrl: './tariff.group.form.component.html',
  styleUrls: ['./tariff.group.form.component.scss']
})
export class TariffGroupFormComponent extends BasicModalForm {



  override form = new FormGroup({
    nameUz: new FormControl(null, [Validators.required]),
    nameRu: new FormControl(null, []),
    nameCrl: new FormControl(null, []),
    status: new FormControl(true, [Validators.required]),
    pkmGroupCode: new FormControl(null, [Validators.required, Validators.maxLength(5)]),
    baseTariff: new FormControl(null, [Validators.required]),
    coefficient: new FormControl(null, [Validators.required]),
});

  override request = new ReferenceFormRequest(ReferenceApiUrls.TARIFF_GROUP);
}
