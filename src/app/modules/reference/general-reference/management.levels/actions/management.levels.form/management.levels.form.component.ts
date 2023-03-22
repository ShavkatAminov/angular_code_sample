import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClientService} from "../../../../../../shared/helpers/service/http/http.client.service";
import { TranslocoService } from '@ngneat/transloco';
import {BasicModalForm} from "../../../../../../shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {AlertServiceComponent} from "../../../../../../shared/helpers/alerts/services/alert.service.component";

@Component({
  selector: 'app-management.levels.form',
  templateUrl: './management.levels.form.component.html',
  styleUrls: ['./management.levels.form.component.scss']
})
export class ManagementLevelsFormComponent extends BasicModalForm {

  
  override form = new FormGroup({
    nameUz: new FormControl(null, [Validators.required]),
    nameRu: new FormControl(null, []),
    nameCrl: new FormControl(null, []),
    code: new FormControl(null, [Validators.required]),
    status: new FormControl(null, [Validators.required]),
});

  override request = new ReferenceFormRequest(ReferenceApiUrls.MANAGEMENT_LEVELS);

  override beforeSave() {
    super.beforeSave();
    this.request.body.code = parseInt(this.request.body.code);
  }
}