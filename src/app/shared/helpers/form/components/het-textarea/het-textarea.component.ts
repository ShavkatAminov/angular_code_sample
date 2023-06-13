import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {BasicFormInput} from "../../basic/basic.form.input";
import {NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'het-textarea',
  templateUrl: './het-textarea.component.html',
  styleUrls: ['./het-textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HetTextareaComponent),
      multi: true
    }
  ]
})
export class HetTextareaComponent  extends BasicFormInput {

  @Input() color: string;
  @Input() placeholder: string = '';
  @Input() rows: number = 5;
  @Input() maxLength: number = null;
  @Input() allowCrl: boolean = false
  @Input() showClearIcon: boolean = true

  @Output() textareaChange: EventEmitter<string> = new EventEmitter<string>();

  onTextareaChange(value: string){
    this.onChange(this.value);
    this.textareaChange.emit(this.value)
  }

  toNull($event){
    this.value = null;
    this.onChange(null);
    this.onTextareaChange(null)
    $event.stopPropagation()
  }
  checkLatin(event) {
    if ((event.which >= 1040 && event.which <= 1103) || event.which == 60 || event.which == 62) {
      event.preventDefault();
    }
  }
}
