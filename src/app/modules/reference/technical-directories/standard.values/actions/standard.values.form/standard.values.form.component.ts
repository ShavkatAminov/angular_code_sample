import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";

@Component({
    selector: 'app-standard.values.form',
    templateUrl: './standard.values.form.component.html',
    styleUrls: ['./standard.values.form.component.scss']
})
export class StandardValuesFormComponent extends BasicModalForm {
    
    override form = new FormGroup({
        code: new FormControl(null, [Validators.required]),
        voltageLevelNetwork: new FormControl(null, [Validators.required]),
        value: new FormControl(null, [Validators.required]),
        status: new FormControl(true, [Validators.required]),
    });

    override request = new ReferenceFormRequest(ReferenceApiUrls.STANDARD_VALUES);

    override beforeSave() {
        this.request.body = this.form.value;
        this.request.body.value = parseInt(this.request.body.value);
    }
}
