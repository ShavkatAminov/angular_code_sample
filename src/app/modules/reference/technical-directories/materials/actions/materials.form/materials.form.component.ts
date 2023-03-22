import {Component} from '@angular/core';
import {HttpClientService} from "../../../../../../shared/helpers/service/http/http.client.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { TranslocoService } from '@ngneat/transloco';
import {BasicModalForm} from "../../../../../../shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {ReferenceDropDownRequest} from "../../../../basic/ReferenceDropDownRequest";
import {AlertServiceComponent} from "../../../../../../shared/helpers/alerts/services/alert.service.component";

@Component({
    selector: 'app-materials.form',
    templateUrl: './materials.form.component.html',
    styleUrls: ['./materials.form.component.scss']
})
export class MaterialsFormComponent extends BasicModalForm {
    

    override form = new FormGroup({
        code: new FormControl(null, [Validators.required]),
        transformerTypeId: new FormControl(null, [Validators.required]),
        sectionMm2: new FormControl(null, [Validators.required]),
        resistance: new FormControl(null, [Validators.required]),
        status: new FormControl(true, [Validators.required]),
        createdDate: new FormControl(null, []),
        updatedDate: new FormControl(null, [Validators.required]),
    });

    override request = new ReferenceFormRequest(ReferenceApiUrls.MATERIALS);

    autoTransformerType = new ReferenceDropDownRequest(ReferenceApiUrls.TRANSFORMER_TYPES);

}
