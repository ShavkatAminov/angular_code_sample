import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "@app/modules/reference/basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "@app/modules/reference/referenceApiUrls";
import {ReferenceDropDownRequest} from "@app/modules/reference/basic/ReferenceDropDownRequest";

@Component({
  templateUrl: './new.personal.account.range.form.component.html',
  styleUrls: ['./new.personal.account.range.form.component.scss']
})
export class NewPersonalAccountRangeFormComponent extends BasicModalForm {

  override form = new FormGroup({
    accountRangeFrom: new FormControl(null, [Validators.required, ]),
    accountRangeTo: new FormControl(null, [Validators.required, ]),
    coatoBranchId: new FormControl(null, [Validators.required, ]),
    consumerTypeId: new FormControl(null, [Validators.required, ]),
   });

  override request = new ReferenceFormRequest(ReferenceApiUrls.NEW_PERSONAL_ACCOUNT_RANGE);
  coatoBranchRequest = new ReferenceDropDownRequest(ReferenceApiUrls.COATO_BRANCHES)
  consumerTypeRequest = new ReferenceDropDownRequest(ReferenceApiUrls.CONSUMER_TYPE)
}
