import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';

import {BasicFormInput} from "@shared/helpers/form/basic/basic.form.input";
import {FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";
import {DateUtil} from "@shared/helpers/utils/DateUtil";
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
export class HetTimepickerComponent  extends BasicFormInput implements OnInit{
  constructor(public translate: TranslocoService) {
    super();
  }
  extraErrorMessage = "";
  mask = "Hh:m0";
  control = new FormControl();

  @Input() color: string;
  @Input() placeholder: string;

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
    if(value && value.length === 6) {
      if(value.toString() !== "Invalid Date") {
        this.onDatePickerChange(value);
        this.showError = false;
      }
      else {
        this.onDatePickerChange(null);
        this.showError = true;
        if(value.toString() !== 'Invalid Date') {
          this.extraErrorMessage = this.translate.translate('ERROR_LIST.BETWEEN')
        }
      }
    }
    else {
      if(value && value.length == 0) {
        this.onDatePickerChange(null);
      }
    }
  }
  onDatePickerChange(value: any) {
    this.strValue = value;
    this.showError = false;
    this.extraErrorMessage = ""
    let fullTime = value + ':00'
    this.onChange(fullTime);
  }
  onClear($event: Event){
    this.control.setValue(null);
  }

  ngOnInit(): void {
    this.control.valueChanges.subscribe(res=>{
      console.log(res)
      this.onDatePickerChange(res)
    })
  }
}
