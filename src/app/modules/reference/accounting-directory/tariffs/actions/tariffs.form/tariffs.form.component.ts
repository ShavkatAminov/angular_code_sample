import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {ReferenceDropDownRequest} from "../../../../basic/ReferenceDropDownRequest";

@Component({
    selector: "app-tariffs.form.component",
    templateUrl: './tariffs.form.component.html',
    styleUrls: ['./tariffs.form.component.scss']
})
export class TariffsFormComponent extends BasicModalForm {


    override form = new FormGroup({
        nameUz: new FormControl(null, [Validators.required]),
        code: new FormControl(null, [Validators.required, Validators.maxLength(5)]),
        status: new FormControl(true, [Validators.required]),
        tariffGroupId: new FormControl(null, [Validators.required]),
        price: new FormControl(null, [Validators.required]),
        nds: new FormControl(true, [Validators.required]),
        isDefault: new FormControl(true, [Validators.required]),
        isHousehold: new FormControl(null, [Validators.required]),
        baseTariffCodeId: new FormControl(null, []),
        timezoneId: new FormControl(null, []),
        indicationTypeId: new FormControl(null, []),
        deactivatedAt: new FormControl(null, []),
        activatedAt: new FormControl(null, []),
        increasePercentage: new FormControl(null, []),
    });

    isChangeTariff = false
    tariffId = null
    statusChanged = false


    setData(data: any) {
        super.setData(data.id);
        this.tariffId = data.id
        if (data.id) {
            this.isChangeTariff = data.isEditTariff
        }
    }


    ndsRadioOptions = [
        {
            name: "GENERAL.HAVE",
            id: true
        },
        {
            name: "GENERAL.NO",
            id: false
        }
    ]

    override request = new ReferenceFormRequest(ReferenceApiUrls.TARIFFS);

    override getMethod() {
        if (this.isChangeTariff) {
            return 'patch';
        }
        return super.getMethod();
    }

    autoTariffGroup = new ReferenceDropDownRequest(ReferenceApiUrls.TARIFF_GROUP);

    autoInticatorType = new ReferenceDropDownRequest(ReferenceApiUrls.INDICATION_TYPES);

    autoBaseRateCodeId = new ReferenceDropDownRequest(ReferenceApiUrls.TARIFFS)

    autoTimeZones = new ReferenceDropDownRequest(ReferenceApiUrls.TIMEZONES);
}
