import { Component } from '@angular/core';
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {ReferenceDropDownRequest} from "../../../../basic/ReferenceDropDownRequest";

@Component({
  selector: 'app-account.directory.form',
  templateUrl: './account.directory.form.component.html',
  styleUrls: ['./account.directory.form.component.scss']
})
export class AccountDirectoryFormComponent extends BasicModalForm{

  override form = new FormGroup({
    account: new FormControl(null, [Validators.required]),
    nameUz: new FormControl(null, [Validators.required]),
    accountGroupId: new FormControl(null, [Validators.required]),
    currencyTypeId: new FormControl(null, [Validators.required]),
    status: new FormControl(true, [Validators.required]),
  });

  override request = new ReferenceFormRequest(ReferenceApiUrls.ACCOUNT_DIRECTORY);
  accountGroup = new ReferenceDropDownRequest(ReferenceApiUrls.ACCOUNT_GROUP);
  currencyTypes = new ReferenceDropDownRequest(ReferenceApiUrls.CURRENCY_TYPE);
}
