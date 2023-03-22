import { Component } from '@angular/core';
import {BasicModalForm} from "../../../../../../shared/helpers/form/modal/basic.modal.form";
import {HttpClientService} from "../../../../../../shared/helpers/service/http/http.client.service";
import {TranslocoService} from "@ngneat/transloco";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {ReferenceDropDownRequest} from "../../../../basic/ReferenceDropDownRequest";
import {AlertServiceComponent} from "../../../../../../shared/helpers/alerts/services/alert.service.component";

@Component({
  selector: 'app-state.government.organizations.form',
  templateUrl: './state.government.organizations.form.component.html',
  styleUrls: ['./state.government.organizations.form.component.scss']
})
export class StateGovernmentOrganizationsFormComponent extends BasicModalForm {
  
  override form = new FormGroup({
    code: new FormControl(null, [Validators.required,Validators.maxLength(20)]),
    nameUz: new FormControl(null, [Validators.required]),
    shortName: new FormControl(null, [Validators.required,Validators.maxLength(50)]),
    ps9Number: new FormControl(null, [Validators.required,Validators.maxLength(10)]),
    budgetCode: new FormControl(null, [Validators.maxLength(10)]),
    stateComplexId: new FormControl(null, [Validators.required]),
    managingOrganizationCode: new FormControl(null, [Validators.required,Validators.maxLength(10)]),
    status: new FormControl(null, [Validators.required]),
  });

  stateComplex = new ReferenceDropDownRequest(ReferenceApiUrls.STATE_COMPLEX)

  override request = new ReferenceFormRequest(ReferenceApiUrls.STATE_GOVERNMENT_ORGANIZATIONS);
}
