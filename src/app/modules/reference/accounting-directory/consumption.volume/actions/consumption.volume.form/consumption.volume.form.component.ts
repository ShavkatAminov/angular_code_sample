import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {RegistersDropDownRequest} from "../../../../../registers/basic/registersDropDownRequest";
import {ReferenceDropDownRequest} from "../../../../basic/ReferenceDropDownRequest";

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
        status: new FormControl(true, [Validators.required]),
        baseTariffId: new FormControl(null, [Validators.required]),
        activationPeriod: new FormControl(null, [Validators.required]),
    });

    override request = new ReferenceFormRequest(ReferenceApiUrls.CONSUMPTION_VOLUME);

    autoBasicTariff = new RegistersDropDownRequest(ReferenceApiUrls.BASE_TARIFF_CODES)
    autoTariff = new ReferenceDropDownRequest(ReferenceApiUrls.TARIFFS)

}