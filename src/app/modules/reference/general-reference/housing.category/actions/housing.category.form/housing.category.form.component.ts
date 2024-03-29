import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";

@Component({
  selector: 'app-housing.category.form',
  templateUrl: './housing.category.form.component.html',
  styleUrls: ['./housing.category.form.component.scss']
})
export class HousingCategoryFormComponent extends BasicModalForm {
  
  override form = new FormGroup({
    nameUz: new FormControl(null, [Validators.required]),
    status: new FormControl(true, [Validators.required]),
   });

  override request = new ReferenceFormRequest(ReferenceApiUrls.HOUSING_CATEGORY);
}
