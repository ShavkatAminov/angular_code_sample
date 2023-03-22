import {Component, forwardRef, Input} from '@angular/core';
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {BasicFormInput} from "../../basic/basic.form.input";

@Component({
  selector: 'het-title',
  templateUrl: './het-title.component.html',
  styleUrls: ['./het-title.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HetTitleComponent),
      multi: true
    }
  ]
})
export class HetTitleComponent extends BasicFormInput{
  @Input() title: string = '';
}