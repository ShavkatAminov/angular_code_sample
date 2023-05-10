import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";

@Component({
    selector: 'app-materials.form',
    templateUrl: './materials.form.component.html',
    styleUrls: ['./materials.form.component.scss']
})
export class MaterialsFormComponent extends BasicModalForm {
    

    override form = new FormGroup({
        nameUz: new FormControl(null, [Validators.required]),
        sectionMm2: new FormControl(null, [Validators.required]),
        resistance: new FormControl(null, [Validators.required]),
        status: new FormControl(true, [Validators.required]),
    });
    override request = new ReferenceFormRequest(ReferenceApiUrls.MATERIALS);

}
