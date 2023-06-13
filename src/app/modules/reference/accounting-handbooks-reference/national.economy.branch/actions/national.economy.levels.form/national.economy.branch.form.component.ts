import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";

@Component({
  selector: 'app-national.economy.branch.form',
  templateUrl: './national.economy.branch.form.component.html',
  styleUrls: ['./national.economy.branch.form.component.scss']
})
export class NationalEconomyBranchFormComponent extends BasicModalForm {


  override form = new FormGroup({
    code: new FormControl(null, [Validators.required]),
    nameUz: new FormControl(null, [Validators.required]),
    status: new FormControl(true, [Validators.required]),
});

  override request = new ReferenceFormRequest(ReferenceApiUrls.NATIONAL_ECONOMY_BRANCH);
}
