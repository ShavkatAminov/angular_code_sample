import {ControlValueAccessor} from "@angular/forms";
import {Component, Input} from "@angular/core";

@Component({
    template: '',
})
export abstract class BasicFormInput implements ControlValueAccessor {

    @Input() label: string = '';

    @Input() widthLabel: number = 50;
    @Input() widthInput: number = 100;

    @Input() required = false;
    @Input() readonly = false;

    protected _value;
    @Input() get value(): any {
        return this._value;
    }
    set value(value: any) {
        this._value = value;
    }
    protected onChange: Function = (value) => {};
    protected onTouch: Function = () => {};

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    @Input() showError: boolean = false;
    @Input() errorMessage: string = '';


    @Input() disabled: boolean = false;
    setDisabledState(disabled: boolean): void {
        this.disabled = disabled;
    }

    writeValue(obj: any): void {
        this.value = obj;
    }

}
