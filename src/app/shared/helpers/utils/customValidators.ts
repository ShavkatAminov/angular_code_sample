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

    static ValidatorMax(max):ValidatorFn {
        return (control: FormControl) => {
            if(control.value && control.value > max) {
                return {
                    invalidMax: "DIGIT_COUNTER_NOT_CORRECT",
                };
            } else {
                return null;
            }
        }
    }
    static ValidatorDivision(divisionNumber):ValidatorFn {
        return (control: FormControl) => {
            if(control.value && parseInt(control.value) % parseInt(divisionNumber) !== 0) {
                return {
                    invalidDivision: {
                        divisionNumber: divisionNumber,
                    },
                };
            } else {
                return null;
            }
        }
    }
    static pinflValidator():ValidatorFn {




        return (control: FormControl) => {
            if(control?.value?.length === 14) {
                const lastNumber = Number(control.value[control.value.length - 1])
                const testNumber = "7317317317317"
                let accNumb = []

                control.value.split('').forEach((n,index) => {
                    if(index === control.value.length - 1 ) return
                    const multipliedNumber = n *= Number(testNumber[index])
                    accNumb.push(multipliedNumber)
                }  )


                const multipliedNumber = accNumb.reduce((acc,curr) => acc + curr,0)

                if(multipliedNumber % 10 === lastNumber) {
                    return null
                }
                else {
                    return {
                        invalidPinfl :"PINFL_NOT_VALID"
                    };
                }
            }


        };
    }
}