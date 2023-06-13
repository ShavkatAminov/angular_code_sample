import {Component, EventEmitter, forwardRef, Input, Output, ViewChild, ElementRef} from '@angular/core';
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

export class HetInputComponent extends BasicFormInput {
    @ViewChild('myInput') myInput: ElementRef;
    @Input() inputType: 'text' | 'number' | 'password' = 'text';
    @Input() prefix  = ""
    @Input() placeholder: string = '';
    @Input() mask: string = '';
    @Input() maxLength: number = 200;
    @Input() svgIcon: string = '';
    @Input() allowCrl: boolean = false
    @Input() underscoreMask;
    @Input() patterns
    @Output() change = new EventEmitter<string>();
    @Output() clear = new EventEmitter<any>();
    @Input () fixedValueLength: number = 0;
    @Input () dropSpecialCharacters:boolean = true

    valueChange(value: string) {
        if(this.underscoreMask) {
            value = value.replaceAll('_',"").substring(0,this.underscoreMask.length)
        }
        this.onChange(value);
        this.change.emit(value);
    }

    passwordType = 'password'
    getInputType() {
        if(this.inputType === 'password') {
            return this.passwordType;
        }
        else {
            return this.inputType;
        }
    }

    togglePasswordType() {
        if(this.passwordType == 'password') {
            this.passwordType = 'text';
        }
        else {
            this.passwordType = 'password';
        }
    }




    toNull($event){
        this.value = null;
        this.onChange(null);
        this.valueChange(null)
        this.clear.emit(null)
        $event.stopPropagation()
    }

    override writeValue(obj: any) {
        super.writeValue(obj);
    }

    onKeyDown(event: KeyboardEvent) {
        if (this.fixedValueLength > 0) {
            const keysToBlock = ['Backspace', 'Delete', 'ArrowRight'];

            if (this.myInput.nativeElement.selectionStart < this.fixedValueLength) {
                event.preventDefault();
            }


            if (this.myInput.nativeElement.selectionStart <= this.fixedValueLength) {
                if (event.key === 'ArrowLeft') {
                    event.preventDefault();
                }
            }

            if (this.value.toString().length <= this.fixedValueLength && keysToBlock.includes(event.key)) {
                if (this.fixedValueLength > 0) {
                    event.preventDefault();
                    this.myInput.nativeElement.setSelectionRange(0, this.fixedValueLength);
                }
            }
        }
    }

    onTextSelect(event) {
        if (this.fixedValueLength > 0) {
            const selectionStart = event.target.selectionStart;
            const selectionEnd = event.target.selectionEnd;

            if (selectionStart < this.fixedValueLength && selectionEnd >= this.fixedValueLength) {
                event.target.selectionStart = this.fixedValueLength;
            }

            if (selectionEnd < this.fixedValueLength) {
                event.target.selectionEnd = this.fixedValueLength;
            }
        }
    }


    checkLatin(event) {
        if ((event.which >= 1040 && event.which <= 1103) || event.which == 60 || event.which == 62) {
            event.preventDefault();
        }
    }
}
