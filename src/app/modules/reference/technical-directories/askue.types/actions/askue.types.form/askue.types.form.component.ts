import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";

@Component({
    selector: 'app-askue.types.form',
    templateUrl: './askue.types.form.component.html',
    styleUrls: ['./askue.types.form.component.scss']
})
export class AskueTypesFormComponent extends BasicModalForm {
    

    override form = new FormGroup({
        nameUz: new FormControl(null, [Validators.required]),
        status: new FormControl(true, [Validators.required]),
    });

    override request = new ReferenceFormRequest(ReferenceApiUrls.ASKUE_TYPES);

    override beforeSave() {
        super.beforeSave();
        this.request.body.value = parseInt(this.request.body.value);
    }
}
