import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "../../../../../shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../src/app/modules/reference/basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../src/app/modules/reference/referenceApiUrls";

@Component({
  templateUrl: './#fileName.form.component.html',
})
export class #compoentClassNameFormComponent extends BasicModalForm {

  override form = new FormGroup({
#formControls   });

  override request = new ReferenceFormRequest(ReferenceApiUrls.#urlnameUpperCase);
}
