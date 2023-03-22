import {Injectable} from "@angular/core";
import {FormModalComponentInterface} from "../../form.modal/form.modal.component.interface";
import {TranslocoService} from "@ngneat/transloco";
import {HttpClientService} from "../../service/http/http.client.service";
import {FormArray, FormControl, FormGroup, ValidationErrors} from "@angular/forms";
import {ErrorList} from "../basic/errorList";
import {BasicModalForm} from "./basic.modal.form";
import {AlertServiceComponent} from "../../alerts/services/alert.service.component";

@Injectable()
export abstract class BasicModalFormArray extends BasicModalForm implements FormModalComponentInterface {
    constructor(public http: HttpClientService, public translate: TranslocoService, public formArrayName: string,public alert:AlertServiceComponent) {
        super(http, translate,alert);
    }
    checkFormControl = (formControlName: any | FormControl, index?: number) => {
        if(index != undefined) {
            const formGroup = (this.form.controls[this.formArrayName] as FormArray).at(index) as FormGroup;
            return formGroup.get(formControlName);
        } else {
            return this.form.get(formControlName);
        }
    }

    override showError(formControlName: string, index?: number): boolean {
        let formControl = this.checkFormControl(formControlName, index);

        return formControl!.status == 'INVALID' && formControl!.touched;
    }

    override errorMessage(formControlName: string, index?: number) {
        let formControl = this.checkFormControl(formControlName, index);

        let result = "";
        if(this.showError(formControlName, index)) {
            const controlErrors: ValidationErrors = formControl.errors;
            if(controlErrors) {
                Object.keys(controlErrors).forEach(key => {
                    if(key === 'error') {
                        result += this.errorMessages[formControlName];
                    }
                    else {
                        result += this.translate.translate('ERROR_LIST.' + ErrorList[key], controlErrors[key]);
                    }
                })
            }
        }
        return result;
    }
}
