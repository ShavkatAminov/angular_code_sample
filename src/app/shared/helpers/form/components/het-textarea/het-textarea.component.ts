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
  @Output() textareaChange: EventEmitter<string> = new EventEmitter<string>();

  onTextareaChange(value: string){
    this.onChange(this.value);
    this.textareaChange.emit(this.value)
  }
}
