import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {BasicFormInput} from "../../basic/basic.form.input";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {DateAdapter, NativeDateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { formatDate } from '@angular/common';
import {DateUtil} from "../../../utils/DateUtil";
import {TranslocoService} from "@ngneat/transloco";

export const PICK_FORMATS = {
    parse: {dateInput: {month: 'numeric', year: 'numeric', day: 'numeric'}},
    display: {
        dateInput: 'input',
        monthYearLabel: {year: 'numeric', month: 'numeric'},
        dateA11yLabel: {year: 'numeric', month: 'numeric', day: 'numeric'},
        monthYearA11yLabel: {year: 'numeric', month: 'numeric'}
    }
};

class PickDateAdapter extends NativeDateAdapter {
    format(date: Date, displayFormat: Object): string {
        if (displayFormat === 'input') {
            return formatDate(date,'dd.MM.yyyy', this.locale);
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
    constructor(private translate: TranslocoService) {
        super();
    }
    ngOnInit(): void {
    }
    mask ="d0.M0.0000"

    @Input() get strValue(): any {
        return  DateUtil.formatDate(this.value)
    }
    extraErrorMessage = "";
    set strValue(value: any) {
        if(value.length === 10) {
            value = DateUtil.convert(value);
            if(value.toString() !== "Invalid Date" && (this.minDate < value && this.maxDate > value)) {
                this.onDatePickerChange(value);
                this.showError = false;
            }
            else {
                this.onDatePickerChange(null);
                this.showError = true;
                if(value.toString() !== 'Invalid Date') {
                    this.extraErrorMessage = this.translate.translate('ERROR_LIST.BETWEEN', {
                        x: DateUtil.formatDate(this.minDate),
                        y: DateUtil.formatDate(this.maxDate),
                    })
                }
            }
        }
    }

    @Input() color: string;
    @Input() placeholder: string;
    @Input() timePicker: boolean = false;
    @Input() minDate: Date = new Date("01.01.1900");
    @Input() maxDate: Date = new Date("12.31.2099");


    @Output() datePickerChanged: EventEmitter<Date> = new EventEmitter<Date>();

    onDatePickerChange(value: any) {
        if(value) {
            let hoursDiff = value.getHours() - value.getTimezoneOffset() / 60;
            let minutesDiff = (value.getHours() - value.getTimezoneOffset()) % 60;
            value.setHours(hoursDiff);
            value.setMinutes(minutesDiff);
        }
        this.value = value;
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
}

