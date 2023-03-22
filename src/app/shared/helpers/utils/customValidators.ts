import {FormControl, ValidatorFn} from "@angular/forms";

interface IIpAdressValidator {
    pattern:RegExp,

}


export class CustomValidators {
    static ipAdressValidator(config:IIpAdressValidator):ValidatorFn {
        return (control: FormControl) => {
            let urlRegEx: RegExp = config.pattern;
            if (control.value && !control.value.match(urlRegEx)) {
                return {
                    invalidIpAdress: "IP_NOT_VALID"
                };
            } else {
                return null;
            }
        };
    }
}

