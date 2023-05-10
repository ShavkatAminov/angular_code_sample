import { Component } from '@angular/core';
import {HttpClientService} from "../../../../../../shared/helpers/service/http/http.client.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "../../../../../../shared/helpers/form/modal/basic.modal.form";
import { TranslocoService } from '@ngneat/transloco';
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {AlertServiceComponent} from "../../../../../../shared/helpers/alerts/services/alert.service.component";


@Component({
  selector: 'app-books.form',
  templateUrl: './books.form.component.html',
  styleUrls: ['./books.form.component.scss']
})
export class BooksFormComponent extends BasicModalForm {

  
  override form = new FormGroup({
    nameUz: new FormControl(null, [Validators.required]),
    nameRu: new FormControl(null, []),
    nameCrl: new FormControl(null, []),
    code: new FormControl(null, [Validators.required]),
    status: new FormControl(true, [Validators.required]),
});

  override request = new ReferenceFormRequest(ReferenceApiUrls.BOOKS);

  override beforeSave() {
    super.beforeSave();
    this.request.body.code = parseInt(this.request.body.code);
  }
}
