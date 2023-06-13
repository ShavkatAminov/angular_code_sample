import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "../../../../../../shared/helpers/form/modal/basic.modal.form";
import {HttpClientService} from "../../../../../../shared/helpers/service/http/http.client.service";
import {TranslocoService} from "@ngneat/transloco";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {AlertServiceComponent} from "../../../../../../shared/helpers/alerts/services/alert.service.component";

@Component({
  selector: 'app-timezones.form',
  templateUrl: './timezones.form.component.html',
  styleUrls: ['./timezones.form.component.scss']
})
export class TimezonesFormComponent extends BasicModalForm {


  override form = new FormGroup({
    nameUz: new FormControl(null, [Validators.required]),
    code: new FormControl(null, [Validators.required]),
    status: new FormControl(true, [Validators.required]),
    timezone: new FormControl(null, [Validators.required]),
   });

  override request = new ReferenceFormRequest(ReferenceApiUrls.TIMEZONES);

}
