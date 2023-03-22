import {
  Directive, ElementRef,
  HostListener, Input, OnInit,
} from '@angular/core';
@Directive({
  selector: '[input-pattern]'
})
export class InputPatternDirective implements OnInit {

  private regex!: RegExp;
  @Input() pattern: string = "[A-Z0-9]";
  @Input() length: number = 2;
  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    this.regex = new RegExp(this.pattern);
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
    if (this.regex.test(str)) {
      return true;
    }
    str = str.toUpperCase();
    str = this.getCharactersByPattern(str);
    if(str) {
      let input = this.el.nativeElement.querySelector('input[matInput]');
      if(input)
        input.value = input.value.substring(0, input.selectionStart) + str + input.value.substring(input.selectionEnd);
      if(input.value.length > this.length) {
        input.value = input.value.substring(0, this.length);
      }
      input.dispatchEvent(new Event('input'));
      input.dispatchEvent(new Event('change'));
      return false;
    }
    event.preventDefault();
    event.stopPropagation();
    return false;
  }

  getCharactersByPattern(str: string) {
    let result: string = "";
    for(let i = 0; i < str.length; i ++) {
      if(this.regex.test(str[i])) {
        result += str[i];
      }
    }
    return result;
  }
}
