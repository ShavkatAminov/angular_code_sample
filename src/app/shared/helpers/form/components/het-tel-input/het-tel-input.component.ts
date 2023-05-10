import {Component, EventEmitter, forwardRef, Input, Output, ViewChild, ElementRef} from '@angular/core';
import {BasicFormInput} from "../../basic/basic.form.input";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {HetInputComponent} from "@shared/helpers/form/components/het-input/het-input.component";

@Component({
    selector: 'het-tel-input',
    templateUrl: './het-tel-input.component.html',
    styleUrls: ['./het-tel-input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => HetTelInputComponent),
            multi: true
        }
    ]
})

export class HetTelInputComponent extends HetInputComponent {
    @Input() prefix = "+998"
    @Input() mask = "00-000-00-00"
    override valueChange(value: string) {
        if(value.length < 5) return this.onChange(null)
        const newStr = value.replaceAll('-','').slice(1,value.length)
        this.onChange(newStr)
    }
}
