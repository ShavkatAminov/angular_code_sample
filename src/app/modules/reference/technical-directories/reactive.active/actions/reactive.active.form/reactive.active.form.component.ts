import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClientService} from "../../../../../../shared/helpers/service/http/http.client.service";
import { TranslocoService } from '@ngneat/transloco';
import {BasicModalForm} from "../../../../../../shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {AlertServiceComponent} from "../../../../../../shared/helpers/alerts/services/alert.service.component";

@Component({
  templateUrl: './reactive.active.form.component.html',
  styleUrls: ['./reactive.active.form.component.scss']
})
export class ReactiveActiveFormComponent extends BasicModalForm{

  
  override form = new FormGroup({
    cosF: new FormControl(null, [Validators.required]),
    f: new FormControl(null, []),
    tgF: new FormControl(null, [Validators.required]),
    reactive: new FormControl(null, [Validators.required]),
    fullReactive: new FormControl(null, [Validators.required]),
    coefficient: new FormControl(null, [Validators.required]),
    status: new FormControl(null, [Validators.required]),
});

  override request = new ReferenceFormRequest(ReferenceApiUrls.REACTIVE_ACTIVE);
}
