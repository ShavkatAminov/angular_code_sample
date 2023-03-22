import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";

@Component({
    selector: 'app-management.types.form',
    templateUrl: './management.types.form.component.html',
    styleUrls: ['./management.types.form.component.scss']
})

export class ManagementTypesFormComponent extends BasicModalForm {

    

    override form = new FormGroup({
        nameUz: new FormControl(null, [Validators.required]),
        code: new FormControl(null, [Validators.required]),
        status: new FormControl(null, [Validators.required]),
    });

    override request = new ReferenceFormRequest(ReferenceApiUrls.MANAGEMENT_TYPES);

    override beforeSave() {
        super.beforeSave();
        this.request.body.amountOfSignsInSerialNumber = parseInt(this.request.body.amountOfSignsInSerialNumber);
        this.request.body.code = parseInt(this.request.body.code);
    }
}
