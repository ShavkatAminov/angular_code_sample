import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { HttpClientService } from 'app/shared/helpers/service/http/http.client.service';
import {BasicModalForm} from "../../../../../../shared/helpers/form/modal/basic.modal.form";
import {TranslocoService} from "@ngneat/transloco";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {AlertServiceComponent} from "../../../../../../shared/helpers/alerts/services/alert.service.component";

@Component({
  selector: 'app-basic.tariff.coefficients.form',
  templateUrl: './basic.tariff.coefficients.form.component.html',
  styleUrls: ['./basic.tariff.coefficients.form.component.scss']
})
export class BasicTariffCoefficientsFormComponent extends BasicModalForm {
  
  override form = new FormGroup({
    nameUz: new FormControl(null, [Validators.required]),
    code: new FormControl(null, [Validators.required]),
    status: new FormControl(null, [Validators.required]),
    meaning: new FormControl(null, [Validators.required]),
   });

  override request = new ReferenceFormRequest(ReferenceApiUrls.BASIC_TARIFF_COEFFICIENTS);
}
