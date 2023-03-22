import {Injectable} from "@angular/core";
import {FormModalComponentInterface} from "../../form.modal/form.modal.component.interface";
import {TranslocoService} from "@ngneat/transloco";
import {HttpClientService} from "../../service/http/http.client.service";
import {FormArray, FormControl, FormGroup, ValidationErrors} from "@angular/forms";
import {ErrorList} from "../basic/errorList";
import {BasicModalForm} from "./basic.modal.form";

@Injectable()
export abstract class BasicModalFormArrays extends BasicModalForm implements FormModalComponentInterface {
    checkFormControl = (formControlName: any | FormControl, index?: number, formArrayName?: string) => {
        if(index != undefined) {
            const formGroup = (this.form.controls[formArrayName] as FormArray).at(index) as FormGroup;
            return formGroup.get(formControlName);
        } else {
            return this.form.get(formControlName);
        }
    }

    override showError(formControlName: string, index?: number, formArrayName?: string): boolean {
        let formControl = this.checkFormControl(formControlName, index, formArrayName);

        return formControl!.status == 'INVALID' && formControl!.touched;
    }

    override errorMessage(formControlName: string, index?: number, formArrayName?: string) {
        let formControl = this.checkFormControl(formControlName, index, formArrayName);

        let result = "";
        if(this.showError(formControlName, index, formArrayName)) {
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
