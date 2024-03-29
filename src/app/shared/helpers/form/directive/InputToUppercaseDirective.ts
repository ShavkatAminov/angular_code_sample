import {
  Directive, ElementRef,
  HostListener, Input, OnInit,
} from '@angular/core';
@Directive({
  selector: '[input-to-uppercase]'
})
export class InputToUppercase implements OnInit {

  private regex!: RegExp;


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

    str = str.toUpperCase();

    if(str) {
      let input = this.el.nativeElement.querySelector('input[matInput]');
      if(input) input.value = input.value.substring(0, input.selectionStart) + str + input.value.substring(input.selectionEnd);

      input.dispatchEvent(new Event('input'));
      input.dispatchEvent(new Event('change'));
      return false;
    }
    event.preventDefault();
    event.stopPropagation();
    return false;
  }


}