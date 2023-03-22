import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClientService} from "../../../../../../shared/helpers/service/http/http.client.service";
import { TranslocoService } from '@ngneat/transloco';
import {BasicModalForm} from "../../../../../../shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {ReferenceDropDownRequest} from "../../../../basic/ReferenceDropDownRequest";
import {AlertServiceComponent} from "../../../../../../shared/helpers/alerts/services/alert.service.component";

@Component({
  templateUrl: './agents.form.component.html',
  styleUrls: ['./agents.form.component.scss']
})
export class AgentsFormComponent extends BasicModalForm {


  
  override form = new FormGroup({
    code: new FormControl(null, [Validators.required]),
    positionId: new FormControl(null, [Validators.required]),
    brigadeId: new FormControl(null, [Validators.required]),
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    middleName: new FormControl(null, []),
    mobilePhone: new FormControl(null, []),
    byTypeId: new FormControl(null, [Validators.required]),
    status: new FormControl(true, [Validators.required]),
  });

  override request = new ReferenceFormRequest(ReferenceApiUrls.AGENT);
  managementPositionsRequest = new ReferenceDropDownRequest(ReferenceApiUrls.MANAGMENT_POSITIONS);
  birgadesRequest = new ReferenceDropDownRequest(ReferenceApiUrls.BRIGADES);
  consumerTypesRequest = new ReferenceDropDownRequest(ReferenceApiUrls.CONSUMER_TYPE);


}
