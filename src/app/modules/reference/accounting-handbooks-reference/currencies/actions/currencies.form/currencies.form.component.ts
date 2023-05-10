import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClientService} from "../../../../../../shared/helpers/service/http/http.client.service";
import { TranslocoService } from '@ngneat/transloco';
import {BasicModalForm} from "../../../../../../shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {AlertServiceComponent} from "../../../../../../shared/helpers/alerts/services/alert.service.component";

@Component({
  templateUrl: './currencies.form.component.html',
  styleUrls: ['./currencies.form.component.scss']
})
export class CurrenciesFormComponent extends BasicModalForm {


  
  override form = new FormGroup({
    nameUz: new FormControl(null, [Validators.required]),
    code: new FormControl(null, [Validators.required]),
    status: new FormControl(true, [Validators.required]),
    symbol: new FormControl(null, [Validators.required, Validators.maxLength(1)]),
    scopeName: new FormControl(null, [Validators.required]),
    scope: new FormControl(null, [Validators.required, Validators.maxLength(2)]),
  });

  override request = new ReferenceFormRequest(ReferenceApiUrls.CURRENCIES);
}
