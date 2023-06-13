import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {HetInputComponent} from "@shared/helpers/form/components/het-input/het-input.component";

type type = "cost" | "quantity" | "kwt"

@Component({
    selector: 'het-number-input',
    templateUrl: './het-number-input.component.html',
    styleUrls: ['./het-number-input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => HetNumberInputComponent),
            multi: true
        }
    ]
})

export class HetNumberInputComponent extends HetInputComponent implements OnInit {
    @Input() inputRightStyle: boolean = false;
    @Input() fractionDigitsLength: number;
    @Input() type: type = 'quantity'
    @Input() beforeDotLength
    regExp: RegExp
    @Input() afterDotLength

    ngOnInit(): void {
        this.mask = this.mask || (this.type === "kwt" ? "0*.000" : null) || (this.type === 'cost' ? "0*.00" : null) || (this.type === 'quantity' ? "0*" : null)
        this.beforeDotLength = this.beforeDotLength || this.maxLength
        this.afterDotLength = this.afterDotLength || this.mask?.split('.')[1]?.length
        this.regExp = new RegExp(`^-?[0-9]{1,${this.beforeDotLength}}(\\.\[0-9]{1,${this.afterDotLength}})?$`)
    }


    override valueChange(value: string) {
        if (this.type === 'quantity') {
            this.onChange(value)
            this.change.emit(value);
        } else {
            const multiplyValue = '1' + new Array(this.afterDotLength).fill(0).join('')
            this.change.emit(String(Number(value) * Number(multiplyValue)));
            this.onChange(Number(value) * Number(multiplyValue))
        }

    }


    override writeValue(obj: any) {
        if (obj) {
            if (this.type === 'quantity') {
                this.value = obj?.toString()
            } else {
                const divideValue = '1' + new Array(this.afterDotLength).fill(0).join('')
                this.value = (obj / Number(divideValue)).toString()
            }

        }

    }


    override onKeyDown(event) {
        super.onKeyDown(event)
        if (Number(event.key) || event.key == 0) {
            let accumulatedValue = event.target.value + event.key
            if (!this.regExp?.test(accumulatedValue)) {
                event.preventDefault()
                event.stopPropagation()
                return false
            }
        }
    }


    CurrencyPattern = {
        '0': {pattern: new RegExp('[-?0-9]'),
        },

    }


}
