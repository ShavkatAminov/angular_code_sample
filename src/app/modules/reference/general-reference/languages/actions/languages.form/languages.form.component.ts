import {Component} from '@angular/core';
import {HttpClientService} from "../../../../../../shared/helpers/service/http/http.client.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "../../../../../../shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {TranslocoService} from "@ngneat/transloco";
import {AlertServiceComponent} from "../../../../../../shared/helpers/alerts/services/alert.service.component";

@Component({
    selector: 'het-languages.form',
    templateUrl: './languages.form.component.html',
    styleUrls: ['./languages.form.component.scss']
})
export class LanguagesFormComponent extends BasicModalForm {
    

    override form = new FormGroup({
        code: new FormControl(null, [Validators.required]),
        nameUz: new FormControl(null, [Validators.required]),
        status: new FormControl(true, [Validators.required]),
    });

    override request = new ReferenceFormRequest(ReferenceApiUrls.LANGUAGES);

    override beforeSave() {
        super.beforeSave();
        this.request.body.value = parseInt(this.request.body.value);
    }
}
