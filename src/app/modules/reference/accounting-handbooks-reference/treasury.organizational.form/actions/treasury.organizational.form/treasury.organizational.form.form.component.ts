import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {ReferenceDropDownRequest} from "../../../../basic/ReferenceDropDownRequest";

@Component({
    templateUrl: './treasury.organizational.form.form.component.html',
    styleUrls: ['./treasury.organizational.form.form.component.scss']
})
export class TreasuryOrganizationalFormFormComponent extends BasicModalForm {


    override form = new FormGroup({
        code: new FormControl(null, [Validators.required]),
        nameUz: new FormControl(null, [Validators.required]),
        status: new FormControl(true, [Validators.required]),
        stateGovernmentOrganizationId: new FormControl(null, [Validators.required]),
    });


    override request = new ReferenceFormRequest(ReferenceApiUrls.TREASURY_ORGANIZATIONAL);
    governmentRequest = new ReferenceDropDownRequest(ReferenceApiUrls.STATE_GOVERNMENT_ORGANIZATIONS);
}

