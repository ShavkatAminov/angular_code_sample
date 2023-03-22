import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {ReferenceDropDownRequest} from "../../../../basic/ReferenceDropDownRequest";

@Component({
  selector: 'app-streets.directory.form',
  templateUrl: './streets.directory.form.component.html',
  styleUrls: ['./streets.directory.form.component.scss']
})
export class StreetsDirectoryFormComponent extends BasicModalForm {

  
  override form = new FormGroup({
    code: new FormControl(null, [Validators.required]),
    nameUz: new FormControl(null, [Validators.required]),
    status: new FormControl(null, [Validators.required]),
    habitationDivisionId: new FormControl(null, [Validators.required]),
   });

  override request = new ReferenceFormRequest(ReferenceApiUrls.STREETS_DIRECTORY);
  habitations = new ReferenceDropDownRequest(ReferenceApiUrls.HABITATION_DIVISIONS);
}
