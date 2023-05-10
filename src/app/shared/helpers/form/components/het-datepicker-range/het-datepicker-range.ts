import {Component, EventEmitter, forwardRef, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";
import {DateAdapter, MAT_DATE_FORMATS} from '@angular/material/core';
import {TranslocoService} from "@ngneat/transloco";
import {HetDatepickerComponent, PickDateAdapter, PICK_FORMATS} from "@shared/helpers/form/components/het-datepicker/het-datepicker.component";


@Component({
    selector: 'het-datepicker-range',
    templateUrl: './het-datepicker-range.html',
    styleUrls: ['./het-datepicker-range.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => HetDatepickerRange),
            multi: true
        },
        {provide: DateAdapter, useClass: PickDateAdapter},
        {provide: MAT_DATE_FORMATS, useValue: PICK_FORMATS},
    ]
})
export class HetDatepickerRange extends HetDatepickerComponent implements OnInit {
    constructor(public translate: TranslocoService) {
        super(translate);
    }
    ngOnInit(): void {
        this.form.valueChanges.subscribe((res : DateRange) => {
            if(res.from && res.to) {
                this.onDatePickerChange(res);
            }
        })
    }
    mask ="d0.M0.0000"
    form = new FormGroup({
        from: new FormControl(),
        to: new FormControl(),
    })

    @Output() datePickerRangeChanged: EventEmitter<DateRange> = new EventEmitter<DateRange>();

    onDatePickerChange(value: DateRange) {
        if(value.from) {
            value.from = this.setTimeZoneOffset(value.from);
        }
        if(value.to) {
            value.to.setHours(23);
            value.to.setMinutes(59);
            value.to = this.setTimeZoneOffset(value.to);
        }
        this.value = value;
        this.showError = false;
        this.extraErrorMessage = ""
        this.onChange(value);
        this.datePickerRangeChanged.emit(value);
    }
}

export interface DateRange {
    from: Date | null;
    to: Date | null;

}

