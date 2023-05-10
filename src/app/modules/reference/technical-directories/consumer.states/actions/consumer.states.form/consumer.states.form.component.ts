import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClientService} from "../../../../../../shared/helpers/service/http/http.client.service";
import {BasicModalForm} from "../../../../../../shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import { TranslocoService } from '@ngneat/transloco';
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {AlertServiceComponent} from "../../../../../../shared/helpers/alerts/services/alert.service.component";


@Component({
  templateUrl: './consumer.states.form.component.html',
  styleUrls: ['./consumer.states.form.component.scss']
})
export class ConsumerStatesFormComponent extends BasicModalForm {

  
  override form = new FormGroup({
    nameUz: new FormControl(null, [Validators.required]),
    code: new FormControl(null, [Validators.required]),
    status: new FormControl(true, [Validators.required]),
   });

  override request = new ReferenceFormRequest(ReferenceApiUrls.CONSUMER_STATES);
}
