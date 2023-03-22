import { Component } from '@angular/core';
import {HttpClientService} from "../../../../../../shared/helpers/service/http/http.client.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "../../../../../../shared/helpers/form/modal/basic.modal.form";
import { ReferenceApiUrls } from 'app/modules/reference/referenceApiUrls';
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {TranslocoService} from "@ngneat/transloco";
import {AlertServiceComponent} from "../../../../../../shared/helpers/alerts/services/alert.service.component";

@Component({
  selector: 'app-banks.directory.form',
  templateUrl: './banks.form.component.html',
  styleUrls: ['./banks.form.component.scss']
})
export class BanksFormComponent extends BasicModalForm {

  

  override form = new FormGroup({
    code: new FormControl(null, [Validators.required]),
    nameUz: new FormControl(null, [Validators.required]),
    status: new FormControl(null, [Validators.required]),
    paymentRequirement: new FormControl(null,[Validators.required] )
  });

  override request = new ReferenceFormRequest(ReferenceApiUrls.BANKS);

  override beforeSave() {
    super.beforeSave();
    this.request.body.code = parseInt(this.request.body.code);
  }

}
