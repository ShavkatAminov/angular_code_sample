import {
    Directive, ElementRef,
    HostListener, Input, OnInit,
} from '@angular/core';
@Directive({
    selector: '[underscoreMask]'
})
export class UnderscoreMaskDirective implements OnInit {

    private regex: RegExp =  /^[A-Za-z]|[0-9]/;
    @Input() underscoreMask

    constructor(private el: ElementRef) {
    }

    ngOnInit(): void {
        let input = this.el.nativeElement.querySelector('input[matInput]');

    }
    @HostListener('input', ['$event'])
    handleInput(event) {
    if(event.target)
    this.applyDataMask(event.target)
    }

    stripMask(maskedData) {
        return maskedData.split('').filter(data => this.regex.test(data));
    }

    reapplyMask(data,mask) {
        return this.applyMask(this.stripMask(data),mask);
    }

    applyMask(data,mask) {
        return mask.map(function(char) {
            if (char != '_') return char;
            if (data.length == 0) return char;
            return data.shift();
        }).join('')
    }

    changed(field,mask) {
        var oldStart = field.selectionStart;
        var oldEnd = field.selectionEnd;
        field.value = this.reapplyMask(field.value,mask);
        field.selectionStart = oldStart;
        field.selectionEnd = oldEnd;

    }



    applyDataMask(field) {
        var mask = this.underscoreMask.split('');
        this.changed(field,mask)
    }



}