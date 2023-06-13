import {Component, forwardRef, Input} from '@angular/core';

import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {HetInputComponent} from "@shared/helpers/form/components/het-input/het-input.component";

@Component({
    selector: 'het-kwt-input',
    templateUrl: './het-kwt-input.component.html',
    styleUrls: ['./het-kwt-input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => HetKwtInputComponent),
            multi: true
        }
    ]
})

export class HetKwtInputComponent extends HetInputComponent {

    @Input() maxLength = 10


    generateLimit() {
        return new Array(this.maxLength).fill(9).join('')
    }

    removeSpace (value:string) {
        return value.replaceAll(' ','')
    }

    replaceCommaToDot (value:string) {
        return value.replaceAll(',', '.')
    }


    valueChange(value: string) {
        value = this.removeSpace(value)
        value = this.replaceCommaToDot(value)
        this.onChange(Number(value) * 1000)
        this.change.emit(String(Number(value) * 1000))
    }

    override writeValue(obj: any) {
        this.value = String(Number(27500) / 1000)
    }


}
