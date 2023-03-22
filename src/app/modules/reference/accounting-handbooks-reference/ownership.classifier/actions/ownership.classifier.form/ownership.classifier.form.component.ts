import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TranslocoService} from "@ngneat/transloco";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {HttpClientService} from "../../../../../../shared/helpers/service/http/http.client.service";
import {BasicModalForm} from "../../../../../../shared/helpers/form/modal/basic.modal.form";
import {AlertServiceComponent} from "../../../../../../shared/helpers/alerts/services/alert.service.component";

@Component({
  templateUrl: './ownership.classifier.form.component.html',
  styleUrls: ['./ownership.classifier.form.component.scss']
})
export class OwnershipClassifierFormComponent extends BasicModalForm {

  
  override form = new FormGroup({
    nameUz: new FormControl(null, [Validators.required]),
    code: new FormControl(null, [Validators.required]),
    status: new FormControl(null, [Validators.required]),
   });

  override request = new ReferenceFormRequest(ReferenceApiUrls.OWNERSHIP_CLASSIFIER);
}
