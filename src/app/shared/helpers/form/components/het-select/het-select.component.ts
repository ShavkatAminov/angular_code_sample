import {
    Component,
    EventEmitter,
    forwardRef,
    Input,
    OnInit,
    Output, ViewChild,
} from '@angular/core';
import {BasicFormInput} from "../../basic/basic.form.input";
import {OptionsObj} from "../../interfaces/options";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {MatSelect} from "@angular/material/select";
import {MatOption} from "@angular/material/core";


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
    @Input() clearable: boolean = false;
    @Input() showClearIcon: boolean = true;

    @Output() selectChanged: EventEmitter<number> = new EventEmitter<number>();

    @ViewChild('matRef') matRef: MatSelect;

    clearField() {
        this.matRef.options.forEach((data: MatOption) => data.deselect());
        this.onChange(null);
        this.selectChanged.emit(null);
    }



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

    toNull($event){
        this.value = null;
        this.onChange(null);
        this.selectChanged.emit(null);
        $event.stopPropagation()
    }
}
