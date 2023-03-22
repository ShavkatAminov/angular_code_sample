import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {BasicFormInput} from "../../basic/basic.form.input";
import {SharedModule} from "../../../../shared.module";
import {OptionsObj} from "../../interfaces/options";
import {NG_VALUE_ACCESSOR} from "@angular/forms";


@Component({
    selector: 'het-select',
    templateUrl: './het-select.component.html',
    styleUrls: ['./het-select.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => HetSelectComponent),
            multi: true
        }
    ]
})

export class HetSelectComponent extends BasicFormInput implements OnInit {
    ngOnInit(): void {
    }

    @Input() color: string;
    @Input() options: OptionsObj[];
    @Input() placeholder: string;

    @Output() selectChanged: EventEmitter<number> = new EventEmitter<number>();

    onSelectChange(value) {
        this.onChange(this.value);
        this.selectChanged.emit(this.value);
    }

    computedClasses() {
        return {
            [this.color]: true,
            'error': this.showError
        };
    }
}
