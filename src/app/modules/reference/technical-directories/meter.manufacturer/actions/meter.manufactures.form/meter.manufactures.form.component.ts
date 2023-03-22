import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "../../../../../../shared/helpers/form/modal/basic.modal.form";
import {HttpClientService} from "../../../../../../shared/helpers/service/http/http.client.service";
import { TranslocoService } from '@ngneat/transloco';
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {AlertServiceComponent} from "../../../../../../shared/helpers/alerts/services/alert.service.component";

@Component({
  selector: 'app-meter.manufactures.form',
  templateUrl: './meter.manufactures.form.component.html',
  styleUrls: ['./meter.manufactures.form.component.scss']
})
export class MeterManufacturesFormComponent extends BasicModalForm {

  
  override form = new FormGroup({
    nameUz: new FormControl(null, [Validators.required]),
    code: new FormControl(null, [Validators.required, Validators.maxLength(20)]),
    status: new FormControl(true, [Validators.required]),
    amountOfSignsInSerialNumber: new FormControl(null, [Validators.required]),
    presenceOfSymbols: new FormControl(null, [Validators.required]),
  });

  override request = new ReferenceFormRequest(ReferenceApiUrls.METER_MANUFACTURER);

  override beforeSave() {
    super.beforeSave()
    this.request.body.amountOfSignsInSerialNumber = parseInt(this.request.body.amountOfSignsInSerialNumber);
  }
}
