import {AbstractControl, FormControl, NgModel, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {isDate, isPresent, parseDate} from "./date";

export class DateValidators {
    static  maxDate = (maxInput: any): ValidatorFn => {

        let value;
        let subscribe = false;
        let maxValue = maxInput;
        const isForm = maxInput instanceof FormControl || maxInput instanceof NgModel;
        return (control: AbstractControl): ValidationErrors => {
            if (!subscribe && isForm) {
                subscribe = true;
                maxInput.valueChanges.subscribe(() => {
                    control.updateValueAndValidity();
                });
            }

            if (isForm) {
                maxValue = maxInput.value;
            }

            value = parseDate(maxValue);

            if (!isDate(value) && !(value instanceof Function)) {
                if (value == null) {
                    return null;
                } else if (isForm) {
                    return {maxDate: {error: 'maxDate is invalid'}};
                } else {
                    throw Error('maxDate value must be or return a formatted date');
                }
            }

            if (isPresent(Validators.required(control))) {
                return null;
            }

            const d = new Date(parseDate(control.value)).getTime();

            if (!isDate(d)) {
                return {value: true};
            }
            if (value instanceof Function) {
                value = value();
            }

            return d <= new Date(value).getTime()
                ? null
                : (isForm ? {maxDate: {control: maxInput, value: maxInput.value}} : {
                    maxDate: {
                        value: maxValue,
                        control: undefined
                    }
                });
        };
    }


    static minDate = (minInput: any): ValidatorFn => {


        let value;
        let subscribe = false;
        let minValue = minInput;
        const isForm = minInput instanceof FormControl || minInput instanceof NgModel;
        return (control: AbstractControl): ValidationErrors => {
            if (!subscribe && isForm) {
                subscribe = true;
                minInput.valueChanges.subscribe(() => {
                    control.updateValueAndValidity();
                });
            }

            if (isForm) {
                minValue = minInput.value;
            }

            value = parseDate(minValue);

            if (!isDate(value) && !(value instanceof Function)) {
                if (value == null) {
                    return null;
                } else if (isForm) {
                    return {minDate: {error: 'minDate is invalid'}};
                } else {
                    throw Error('minDate value must be or return a formatted date');
                }
            }

            if (isPresent(Validators.required(control))) {
                return null;
            }

            const d = new Date(parseDate(control.value)).getTime();

            if (!isDate(d)) {
                return {value: true};
            }
            if (value instanceof Function) {
                value = value();
            }

            return d >= new Date(value).getTime()
                ? null
                : (isForm ? {minDate: {control: minInput, value: minInput.value}} : {
                    minDate: {
                        value: minValue,
                        control: undefined
                    }
                });
        };
    }
}
