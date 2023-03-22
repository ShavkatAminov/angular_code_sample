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
  selector: 'app-workplace.form',
  templateUrl: './work.place.form.component.html',
  styleUrls: ['./work.place.form.component.scss']
})

export class WorkPlaceFormComponent extends BasicModalForm {

  

  override form = new FormGroup({
    code: new FormControl(null, [Validators.required,Validators.maxLength(20)]),
    nameUz: new FormControl(null, [Validators.required,Validators.maxLength(100)]),
    organizationId: new FormControl(null, []),
    stateGovernmentOrganizationId: new FormControl(null, [Validators.required]),
    tin: new FormControl(null, [Validators.required,Validators.maxLength(9)]),
    higherOrganizationId: new FormControl(null, []),
    processed: new FormControl(null, []),
    status: new FormControl(null, [Validators.required]),
  });

  override request = new ReferenceFormRequest(ReferenceApiUrls.WORK_PLACE);

  governmentOrganization = new ReferenceDropDownRequest(ReferenceApiUrls.STATE_GOVERNMENT_ORGANIZATIONS)
  organizations = new ReferenceDropDownRequest(ReferenceApiUrls.ORGANIZATIONS)
  override beforeSave() {
    super.beforeSave();
    this.request.body.code = parseInt(this.request.body.code);
  }
}
