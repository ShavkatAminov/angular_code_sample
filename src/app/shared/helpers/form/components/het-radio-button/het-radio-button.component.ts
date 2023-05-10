import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {BasicFormInput} from "../../basic/basic.form.input";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {OptionsObj} from "../../interfaces/options";


@Component({
  selector: 'het-radio-button',
  templateUrl: './het-radio-button.component.html',
  styleUrls: ['./het-radio-button.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HetRadioButtonComponent),
      multi: true
    }
  ]
})
export class HetRadioButtonComponent extends BasicFormInput{
  @Input() options: OptionsObj[];
  @Input() class: string='';
  @Input() color:string='primary'
  @Output() selectionChanged: EventEmitter<number> = new EventEmitter<number>();
  setBorder: boolean = false;
  onselectionchange(value){
    this.onChange(this.value)
    this.selectionChanged.emit(this.value)
  }

  setborder(){
    return this.setBorder=!this.setBorder;
  }
}
