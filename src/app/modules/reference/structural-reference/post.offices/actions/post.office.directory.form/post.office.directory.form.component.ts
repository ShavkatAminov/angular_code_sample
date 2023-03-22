import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClientService} from "../../../../../../shared/helpers/service/http/http.client.service";
import {BasicModalForm} from "../../../../../../shared/helpers/form/modal/basic.modal.form";
import { TranslocoService } from '@ngneat/transloco';
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {AlertServiceComponent} from "../../../../../../shared/helpers/alerts/services/alert.service.component";

@Component({
  selector: 'app-post.office.directory.form',
  templateUrl: './post.office.directory.form.component.html',
  styleUrls: ['./post.office.directory.form.component.scss']
})
export class PostOfficeDirectoryFormComponent extends BasicModalForm {
  
  override form = new FormGroup({
    code: new FormControl(null, [Validators.required]),
    nameUz: new FormControl(null, [Validators.required]),
    address: new FormControl(null, [Validators.required]),
    status: new FormControl(null, [Validators.required]),
  });
  override request = new ReferenceFormRequest(ReferenceApiUrls.POST_OFFICES);
}
