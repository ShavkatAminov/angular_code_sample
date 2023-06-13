import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {BasicFormInput} from "../../basic/basic.form.input";
import {FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";
import {DateAdapter, NativeDateAdapter, MAT_DATE_FORMATS} from '@angular/material/core';
import {formatDate} from '@angular/common';
import {DateUtil} from "../../../utils/DateUtil";
import {TranslocoService} from "@ngneat/transloco";
import {debounceTime} from "rxjs";


export const PICK_FORMATS = {
    parse: {dateInput: {month: 'numeric', year: 'numeric', day: 'numeric'}},
    display: {
        dateInput: 'input',
        monthYearLabel: {year: 'numeric', month: 'numeric'},
        dateA11yLabel: {year: 'numeric', month: 'numeric', day: 'numeric'},
        monthYearA11yLabel: {year: 'numeric', month: 'numeric'}
    }
};

export class PickDateAdapter extends NativeDateAdapter {


    format(date: Date, displayFormat: Object): string {
        if (displayFormat === 'input') {
            return formatDate(date, 'dd.MM.yyyy', this.locale);
        } else {
            return date.toDateString();
        }
    }

    override getFirstDayOfWeek(): number {
        return 1;
    }
}


@Component({
    selector: 'het-datepicker',
    templateUrl: './het-datepicker.component.html',
    styleUrls: ['./het-datepicker.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => HetDatepickerComponent),
            multi: true
        },
        {provide: DateAdapter, useClass: PickDateAdapter},
        {provide: MAT_DATE_FORMATS, useValue: PICK_FORMATS}
    ]
})

export class HetDatepickerComponent extends BasicFormInput implements OnInit {

    control = new FormControl()

    constructor(public translate: TranslocoService) {
        super();
    }

    ngOnInit(): void {
        this.control.valueChanges.pipe(debounceTime(1000)).subscribe(value => {
            if (value) {
                const array = value?.split('.')
                if (array?.length > 2 && array[2]?.length === 2) {
                    const newValue = new Date().getFullYear().toString().slice(0, 2) + array[2]
                    array[2] = newValue
                    value = array.join('.')
                    this.control.patchValue(value, {emitEvent: false});
                }
                this.strValue(value);
            }
        })
    }

    mask = "d0.M0.0000"

    extraErrorMessage = "";


    override writeValue(obj: any) {
        //super.writeValue(obj);
        if(obj) {
            this.control.setValue(DateUtil.formatDate(obj))
        } else {
            this.onDatePickerChange(null);
        }
    }

    strValue(value: any) {
        if (value.length === 10) {
            value = DateUtil.convert(value);
            const minDate = new Date(this.minDate).setHours(0,0,0,0)
            const maxDate = new Date(this.maxDate).setHours(23,59,0,0)

            if (value.toString() !== "Invalid Date" && (minDate <= value && maxDate >= value)) {
                this.onDatePickerChange(value);
                this.showError = false;
            } else {
                this.onDatePickerChange(null);
                this.showError = true;
                if (value.toString() !== 'Invalid Date') {
                    this.extraErrorMessage = this.translate.translate('ERROR_LIST.BETWEEN', {
                        x: DateUtil.formatDate(this.minDate),
                        y: DateUtil.formatDate(this.maxDate),
                    })
                }
            }
        } else {
            if (value.length == 0) {
                this.onDatePickerChange(null);
            }
        }
    }


    toNull($event) {
        this.onDatePickerChange(null);
        $event.stopPropagation();
    }


    setTimeZoneOffset(value: Date | null) {
        if (value) {
            let time = value.getTime();
            time -= value.getTimezoneOffset() * 60000;
            value = new Date(time);
        }
        return value;
    }

    @Input() color: string;
    @Input() placeholder: string;
    @Input() timePicker: boolean = false;
    @Input() minDate: Date = new Date("01.01.1900");
    @Input() maxDate: Date = new Date("12.31.2099");


    @Output() datePickerChanged: EventEmitter<Date> = new EventEmitter<Date>();

    onDatePickerChange(value: any) {
        value = this.setTimeZoneOffset(value);
        this.value = value;
        this.control.patchValue(DateUtil.formatDate(value), {emitEvent: false, onlySelf: false});
        this.showError = false;
        this.extraErrorMessage = ""
        this.onChange(value);
        this.datePickerChanged.emit(value);
    }

    computedClasses() {
        return {
            'error': this.showError,
            [this.color]: true,
            'datepicker-readonly': this.readonly
        };
    }

    setDisabledState(disabled: boolean) {
        super.setDisabledState(disabled);
        if (disabled) {
            this.control.disable();
        } else {
            this.control.enable();
        }
    }
}

