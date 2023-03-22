import { Component } from '@angular/core';
import {BasicModalForm} from "../../../../../../shared/helpers/form/modal/basic.modal.form";
import {HttpClientService} from "../../../../../../shared/helpers/service/http/http.client.service";
import {TranslocoService} from "@ngneat/transloco";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReferenceDropDownRequest} from "../../../../basic/ReferenceDropDownRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {AlertServiceComponent} from "../../../../../../shared/helpers/alerts/services/alert.service.component";

@Component({
  selector: 'app-subgroup.government.organization.form',
  templateUrl: './subgroup.government.organization.form.component.html',
  styleUrls: ['./subgroup.government.organization.form.component.scss']
})
export class SubgroupGovernmentOrganizationFormComponent extends BasicModalForm {
  
  override form = new FormGroup({
    code: new FormControl(null, [Validators.required,Validators.maxLength(20)]),
    nameUz: new FormControl(null, [Validators.required]),
    shortName: new FormControl(null, [Validators.required,Validators.maxLength(50)]),
    ps9Code: new FormControl(null, [Validators.required,Validators.maxLength(10)]),
    subgroupType: new FormControl(null, [Validators.maxLength(10)]),
    stateGovernmentOrganizationId: new FormControl(null, [Validators.required]),
    availability: new FormControl(null, [Validators.required,Validators.maxLength(1)]),
    status: new FormControl(null, [Validators.required]),
  });

  stateGovernment = new ReferenceDropDownRequest(ReferenceApiUrls.STATE_GOVERNMENT_ORGANIZATIONS)

  override request = new ReferenceFormRequest(ReferenceApiUrls.SUBGROUP_GOVERNMENT_ORGANIZATIONS);
}
