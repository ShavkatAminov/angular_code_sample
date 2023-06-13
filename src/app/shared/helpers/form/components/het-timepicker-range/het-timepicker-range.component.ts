import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';

import {BasicFormInput} from "@shared/helpers/form/basic/basic.form.input";
import {FormControl, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";
import {TranslocoService} from "@ngneat/transloco";

@Component({
    selector: 'het-timepicker-range',
    templateUrl: './het-timepicker-range.component.html',
    styleUrls: ['./het-timepicker-range.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => HetTimepickerRangeComponent),
            multi: true
        }
    ],
})
export class HetTimepickerRangeComponent extends BasicFormInput implements OnInit {
    constructor(public translate: TranslocoService) {
        super();
    }

    ngOnInit(): void {
        this.form.valueChanges.subscribe(res => {
            if (res.from && res.to && res.from.length === 5 && res.to.length === 5) {
                this.onChange({
                    from: res.from + ':00',
                    to: res.to + ':00',
                });
            }
        })
    }

    extraErrorMessage = "";
    mask = "Hh:m0";

    form = new FormGroup({
        from: new FormControl(''),
        to: new FormControl(''),
    });


    @Input() color: string;
    @Input() placeholder: string;

    @Output() datePickerChanged: EventEmitter<Date> = new EventEmitter<Date>();

    @Input() get strValue(): any {
        return this.value
    }

    computedClasses() {
        return {
            'error': this.showError,
            [this.color]: true,
            'datepicker-readonly': this.readonly
        };
    }

    set strValue(value: any) {
        this.value = value;
    }

    onInputChange(event: any, number: number) {
        this.showError = false;
        this.extraErrorMessage = "";

        if (event.target.value.length === 5 || !event.target.value) {

            this.form.patchValue(number === 1 ? {
                from: event.target.value
            } : {
                to: event.target.value
            })

        }
    }

    onValueFromChange(data: any) {
        this.showError = false;
        this.extraErrorMessage = "";

        this.form.patchValue({
            from: data
        });
    }

    onValueToChange(data: any) {
        this.showError = false;
        this.extraErrorMessage = "";

        this.form.patchValue({
            to: data
        });
    }

    override writeValue(obj: any) {
        if (obj && obj.from && obj.to) {
            this.form.patchValue({
                from: obj.from.slice(0, 5),
                to: obj.to.slice(0, 5)
            })
        } else this.form.reset();
    }


    onClear(number: number) {
        this.form.patchValue(number === 1 ? {from: null} : {to: null});

        if(this.form.get('from').value || this.form.get('to').value) {
            this.onChange(this.form.value);
        } else {
            this.onChange(null);
        }
    }
}
