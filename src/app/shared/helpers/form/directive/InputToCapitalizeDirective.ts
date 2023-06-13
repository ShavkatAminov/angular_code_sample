import {
    Directive, ElementRef,
    HostListener,  OnInit,
} from '@angular/core';
@Directive({
    selector: '[input-to-capitalize]'
})
export class InputToCapitalizeDirective implements OnInit {


    constructor(private el: ElementRef) {
    }

    ngOnInit(): void {

        let input = this.el.nativeElement.querySelector('input[matInput]');
        input.setAttribute('autocomplete', 'off');
    }
    @HostListener('keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if(!event.key)
            return false;
        let str = <string> event.key;
        if(event.ctrlKey)
            return true;
        if(str &&  str.length != 1)
            return true;
        return this.handleEvent(str, event);
    }

    @HostListener('paste', ['$event'])
    handlePasteEvent(event: ClipboardEvent) {
        let str: string  = <string> event.clipboardData?.getData('text/plain');
        return this.handleEvent(str, event);
    }

    handleEvent(str: string, event: any) {
        if(str) {
            let input = this.el.nativeElement.querySelector('input[matInput]');
            const inputValue = input.value.substring(0, input.selectionStart) + str + input.value.substring(input.selectionEnd)
            if(input) input.value = inputValue.charAt(0).toUpperCase() + inputValue.slice(1)

            input.dispatchEvent(new Event('input'));
            input.dispatchEvent(new Event('change'));
            return false;
        }
        event.preventDefault();
        event.stopPropagation();
        return false;
    }


}