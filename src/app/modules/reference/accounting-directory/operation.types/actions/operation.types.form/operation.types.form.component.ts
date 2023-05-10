import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceListRequest} from "@app/modules/reference/basic/ReferenceListRequest";
import {ReferenceDropDownRequest} from "@app/modules/reference/basic/ReferenceDropDownRequest";

@Component({
  selector: 'app-operation.types.form',
  templateUrl: './operation.types.form.component.html',
  styleUrls: ['./operation.types.form.component.scss']
})
export class OperationTypesFormComponent extends BasicModalForm {

  
  override form = new FormGroup({
    code: new FormControl(null, [Validators.required]),
    nameUz: new FormControl(null, [Validators.required]),
    debitAccountCode: new FormControl(null, [Validators.required]),
    creditAccountCode: new FormControl(null, [Validators.required]),
    status: new FormControl(true, [Validators.required]),
  });



  override request = new ReferenceFormRequest(ReferenceApiUrls.OPERATION_TYPES);

  setData(data: any) {
    if(data) {
      this.request.id = data;
      this.http.request(this.request, 'get').subscribe(res => {
        this.form.patchValue(res);
      })
    }
  }

  accountDirectoryDropdown = new ReferenceDropDownRequest(ReferenceApiUrls.ACCOUNT_DIRECTORY)
}
