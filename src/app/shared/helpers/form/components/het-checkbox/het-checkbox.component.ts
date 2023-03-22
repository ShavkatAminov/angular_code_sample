import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {BasicFormInput} from "../../basic/basic.form.input";
import {NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
    selector: 'het-checkbox',
    templateUrl: './het-checkbox.component.html',
    styleUrls: ['./het-checkbox.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => HetCheckboxComponent),
            multi: true
        }
    ]
})

export class HetCheckboxComponent extends BasicFormInput {

    @Output() checkboxChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
    onSelectionChange(value){
        this.onChange(value);
        this.checkboxChanged.emit(value)
    }
}
