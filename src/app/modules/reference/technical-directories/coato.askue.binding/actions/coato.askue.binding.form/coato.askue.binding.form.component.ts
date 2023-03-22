import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "../../../../../../shared/helpers/form/modal/basic.modal.form";
import {HttpClientService} from "../../../../../../shared/helpers/service/http/http.client.service";
import { TranslocoService } from '@ngneat/transloco';
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceDropDownRequest} from "../../../../basic/ReferenceDropDownRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {AlertServiceComponent} from "../../../../../../shared/helpers/alerts/services/alert.service.component";

@Component({
  selector: 'app-coato.askue.binding.form',
  templateUrl: './coato.askue.binding.form.component.html',
  styleUrls: ['./coato.askue.binding.form.component.scss']
})
export class CoatoAskueBindingFormComponent extends BasicModalForm{
  
  override form = new FormGroup({
    coatoBranchId: new FormControl(null, [Validators.required]),
    askueTypeId: new FormControl(null, [Validators.required]),
    urlAddress: new FormControl(null, [Validators.required]),
    processNumberId: new FormControl(null, [Validators.required]),
    status: new FormControl(null, [Validators.required]),
  });

  override request = new ReferenceFormRequest(ReferenceApiUrls.COATO_ASKUE_BINDING);
  coatoBranchesRequest =  new ReferenceDropDownRequest(ReferenceApiUrls.COATO_BRANCHES);
  askueTypesRequest =  new ReferenceDropDownRequest(ReferenceApiUrls.ASKUE_TYPES);
  processNumbersRequest =  new ReferenceDropDownRequest(ReferenceApiUrls.COATO_ASKUE_PROCESS);

  override beforeSave() {
    this.request.body = this.form.value;
    this.request.body.coatoBranchId = parseInt(this.request.body.coatoBranchId);
    this.request.body.askueTypeId = parseInt(this.request.body.askueTypeId);
    this.request.body.processNumberId = parseInt(this.request.body.processNumberId);
  }
}
