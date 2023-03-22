import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {BasicFormInput} from "../../basic/basic.form.input";
import {NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
    selector: 'het-input',
    templateUrl: './het-input.component.html',
    styleUrls: ['./het-input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => HetInputComponent),
            multi: true
        }
    ]
})

export class HetInputComponent extends BasicFormInput  {
    @Input() inputType: 'text' | 'number' | 'password' = 'text';

    @Input() placeholder: string = '';
    @Input() mask: string = '';
    @Input() maxLength: number = 200;
    @Input() svgIcon: string = '';
    @Input() allowCrl:boolean = false
    @Input() patterns
    @Output() change = new EventEmitter<string>();
    valueChange(value: string) {
        this.onChange(this.value)
        this.change.emit(this.value)
    }


    checkLatin(event) {
     if ((event.which >= 1040 && event.which <= 1103) || event.which == 60 || event.which == 62)  {
            event.preventDefault();
        }
    }
}
