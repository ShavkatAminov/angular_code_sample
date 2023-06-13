import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';

import {BasicFormInput} from "@shared/helpers/form/basic/basic.form.input";
import {FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";
import {TranslocoService} from "@ngneat/transloco";

@Component({
  selector: 'app-het-timepicker',
  templateUrl: './het-timepicker.component.html',
  styleUrls: ['./het-timepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HetTimepickerComponent),
      multi: true
    }
  ],
})
export class HetTimepickerComponent  extends BasicFormInput{
  constructor(public translate: TranslocoService) {
    super();
  }
  extraErrorMessage = "";
  mask = "Hh:m0";
  control = new FormControl();

  @Input() color: string;
  @Input() placeholder: string;
  @Input() isClose: boolean = false;

  @Output() datePickerChanged: EventEmitter<Date> = new EventEmitter<Date>();

  @Input() get strValue(): any {
    return  this.value
  }
  computedClasses() {
    return {
      'error': this.showError,
      [this.color]: true,
      'datepicker-readonly': this.readonly
    };
  }
  set strValue(value: any) {
      if (value &&value.length >= 5){
        let asd = value.slice(0,5)
        this.value = asd;
      }
    }
  onDatePickerChange(value: any) {
    this.strValue = value;

    this.showError = false;
    this.extraErrorMessage = ""
    this.onChange(value);
  }
  onClear($event: Event){
    this.control.setValue(null);
  }
}
