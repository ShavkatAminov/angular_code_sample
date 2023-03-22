import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {ReferenceDropDownRequest} from "../../../../basic/ReferenceDropDownRequest";

@Component({
    selector: 'app-management.positions.form',
    templateUrl: './management.positions.form.component.html',
    styleUrls: ['./management.positions.form.component.scss']
})
export class ManagementPositionsFormComponent extends BasicModalForm {
    
    override form = new FormGroup({
        nameUz: new FormControl(null, [Validators.required]),
        code: new FormControl(null, [Validators.required]),
        status: new FormControl(null, [Validators.required]),
        managementLevelId: new FormControl(null, []),
    });
    override request = new ReferenceFormRequest(ReferenceApiUrls.MANAGMENT_POSITIONS);
    autoCompleteLevel = new ReferenceDropDownRequest(ReferenceApiUrls.MANAGEMENT_LEVELS);
}
