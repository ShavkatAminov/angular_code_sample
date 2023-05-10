import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";

@Component({
  selector: 'app-post.office.directory.form',
  templateUrl: './post.office.directory.form.component.html',
  styleUrls: ['./post.office.directory.form.component.scss']
})
export class PostOfficeDirectoryFormComponent extends BasicModalForm {
  
  override form = new FormGroup({
    nameUz: new FormControl(null, [Validators.required]),
    address: new FormControl(null, [Validators.required]),
    status: new FormControl(true, [Validators.required]),
  });
  override request = new ReferenceFormRequest(ReferenceApiUrls.POST_OFFICES);
}
