import {FormGroup} from "@angular/forms";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class FormCalculationService {
    sum(form: FormGroup, controls) {
        let sum = 0;
        controls.forEach(control => {
            if(form.get(control)?.value)
                sum += parseFloat(form.get(control).value)
        });
        return sum;
    }
    formOnchange(form: FormGroup, options: ArrayList) {
        Object.keys(options).forEach(sumControl => {
            options[sumControl].forEach(itemControl => {
                form.get(itemControl)?.valueChanges.subscribe(() => {
                    let sumValue = {};
                    sumValue[sumControl] = this.sum(form, options[sumControl]);
                    form.patchValue(sumValue)
                })
            })
        })
    }
}

export interface ArrayList {
    [key: string]: string[];
}
