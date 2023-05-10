import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "../../../../../../shared/helpers/form/modal/basic.modal.form";
import {HttpClientService} from "../../../../../../shared/helpers/service/http/http.client.service";
import { TranslocoService } from '@ngneat/transloco';
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {AlertServiceComponent} from "../../../../../../shared/helpers/alerts/services/alert.service.component";
import {ReferenceListRequest} from "@app/modules/reference/basic/ReferenceListRequest";
import {ReferenceDropDownRequest} from "@app/modules/reference/basic/ReferenceDropDownRequest";

@Component({
  selector: 'app-directory.of.complexes.form',
  templateUrl: './directory.of.complexes.form.component.html',
  styleUrls: ['./directory.of.complexes.form.component.scss']
})

export class DirectoryOfComplexesFormComponent extends BasicModalForm{
  
  override form = new FormGroup({

    code: new FormControl(null, [Validators.required]),
    budgetCode: new FormControl(null, [Validators.required]),
    nameUz:new FormControl(null,[Validators.required]),
    status: new FormControl(true, [Validators.required]),
  });

  override request = new ReferenceFormRequest(ReferenceApiUrls.STATE_COMPLEX);


  override beforeSave() {
    this.request.body = this.form.value;
  }
}
