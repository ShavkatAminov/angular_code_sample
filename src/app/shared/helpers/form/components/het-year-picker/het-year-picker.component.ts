import {TranslocoService} from "@ngneat/transloco";
import {debounceTime} from "rxjs";
import {HetDatepickerComponent} from "@shared/helpers/form/components/het-datepicker/het-datepicker.component";
import {Component, forwardRef, Input, ViewChild, ViewEncapsulation} from "@angular/core";
import {DateAdapter, MAT_DATE_FORMATS, NativeDateAdapter} from "@angular/material/core";
import {formatDate} from "@angular/common";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {MatDatepicker} from "@angular/material/datepicker";
import {DateUtil} from "@shared/helpers/utils/DateUtil";
import {getTranslatedMonth} from "@shared/helpers/utils/getTranslatedMonth";


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
    selector: 'het-yearpicker',
    templateUrl: './het-year-picker.component.html',
    styleUrls: ['./het-year-picker.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => HetYearPickerComponent),
            multi: true
        },
        {provide: DateAdapter, useClass: PickDateAdapter},
        {provide: MAT_DATE_FORMATS, useValue: PICK_FORMATS}
    ],
    encapsulation: ViewEncapsulation.None
})


export class HetYearPickerComponent extends HetDatepickerComponent {
    @ViewChild('yearPicker') myDatepicker!: MatDatepicker<Date>;
    @Input() mode: 'year' | 'month' | 'default';
    @Input() mask: string = '';

    ngOnInit(): void {
        this.control.valueChanges.pipe(debounceTime(500)).subscribe(value => {
            if (value) {
                this.strValue(value);
            }
        })
    }

    constructor(public translate: TranslocoService) {
        super(translate);
    }

    override strValue(value: any) {
        if (value.length === 4) {
            value = new Date(value);
            if (value.toString() !== "Invalid Date" && (this.minDate < value && this.maxDate > value)) {
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

    override toNull($event) {
        this.onDatePickerChange(null);
        this.control.setValue(null);
        $event.stopPropagation();
    }

    override onDatePickerChange(value: any) {
        value = this.setTimeZoneOffset(value);
        this.value = value;
        this.showError = false;
        this.extraErrorMessage = ""
        this.onChange(value);
        this.datePickerChanged.emit(value);
    }

    yearSelected(data) {
        this.myDatepicker.close();
        this.onDatePickerChange(data);
        this.control.patchValue(data.getFullYear(), {emitEvent: false, onlySelf: false});
    }

    monthSelected(data) {
        this.myDatepicker.close();
        this.onDatePickerChange(data);
        let month = this.translate.translate(getTranslatedMonth(data.getMonth()));
        console.log(month);

        this.control.patchValue(month, {emitEvent: false, onlySelf: false});
    }

    override writeValue(data) {
        if(data) {
            if (this.mode === 'year') {
                this.control.patchValue(data.getFullYear(), {emitEvent: false, onlySelf: false});
            } else if (this.mode === 'month') {
                let month = this.translate.translate(getTranslatedMonth(data.getMonth()));
                this.control.patchValue(month, {emitEvent: false, onlySelf: false});
            } else {
                this.control.patchValue(null);
                this.value = null;
            }
        } else {
            this.control.patchValue(null);
            this.value = null;
        }
    }



}
