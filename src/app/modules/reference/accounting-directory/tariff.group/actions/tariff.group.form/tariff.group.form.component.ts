import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClientService} from "../../../../../../shared/helpers/service/http/http.client.service";
import {TranslocoService} from "@ngneat/transloco";
import {BasicModalForm} from "../../../../../../shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {AlertServiceComponent} from "../../../../../../shared/helpers/alerts/services/alert.service.component";

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
    pkmGroupCode: new FormControl(null, [Validators.required]),
    baseTariff: new FormControl(null, [Validators.required]),
    coefficient: new FormControl(null, [Validators.required]),
});

  override request = new ReferenceFormRequest(ReferenceApiUrls.TARIFF_GROUP);
}
