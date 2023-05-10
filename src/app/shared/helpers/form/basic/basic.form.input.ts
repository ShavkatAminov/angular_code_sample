import {ControlValueAccessor} from "@angular/forms";
import {Component, HostListener, Input} from "@angular/core";

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

    @HostListener('keydown.enter')
    onKeyDownEnter() {
        const nextEl = this.getNextFocusableElement();
        if (nextEl) {
            nextEl.focus();
        }
    }

    protected getNextFocusableElement(): HTMLElement | null {
        const focusableElements = document.querySelectorAll(
            'input:not([hidden],[readonly=true]), select:not([hidden],[readonly=true]), textarea:not([hidden],[readonly=true])'
        ) as NodeListOf<HTMLElement>;

        const currentIndex = Array.from(focusableElements).indexOf(document.activeElement as HTMLElement);
        const nextIndex = currentIndex + 1;

        if (nextIndex < focusableElements.length) {
            return focusableElements[nextIndex];
        }
        return null;
    }

}
