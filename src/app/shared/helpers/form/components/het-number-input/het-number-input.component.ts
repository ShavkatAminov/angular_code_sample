import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {BasicFormInput} from "../../basic/basic.form.input";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {HetInputComponent} from "@shared/helpers/form/components/het-input/het-input.component";

@Component({
    selector: 'het-number-input',
    templateUrl: './het-number-input.component.html',
    styleUrls: ['./het-number-input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => HetNumberInputComponent),
            multi: true
        }
    ]
})

export class HetNumberInputComponent extends HetInputComponent {


    override writeValue(obj: any) {
        this.value = obj?.toString()
    }

    CurrencyPattern = {
        'V': {pattern: new RegExp('-?')},
        '0': {pattern: new RegExp('[0-9]')},

    }


}
