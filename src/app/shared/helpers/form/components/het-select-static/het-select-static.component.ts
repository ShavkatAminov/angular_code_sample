import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {HetSelectComponent} from "@shared/helpers/form/components/het-select/het-select.component";

@Component({
    selector: 'het-select-static',
    template: '<het-select [widthLabel]="widthLabel" [readonly]="readonly" [color]="color" [options]="options" (selectChanged)="onSelectChange($event)" [(ngModel)]="value" [required]="required" [label]="label" [disabled]="disabled" [showError]="showError" [errorMessage]="errorMessage"></het-select>',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => HetSelectStaticComponent),
            multi: true
        }
    ]
})
export class HetSelectStaticComponent extends HetSelectComponent implements OnInit {

    @Input() type: 'status' | 'yesNo' = "status";
    override options = [
        {
            id: null,
            name: '',
        },
        {
            id: true,
            name: 'GENERAL.ACTIVE',
        },
        {
            id: false,
            name: 'GENERAL.INACTIVE',
        },
    ];

    ngOnInit(): void {
        if (this.type == 'yesNo') {
            this.options = [
                {
                    id: null,
                    name: '',
                },
                {
                    id: true,
                    name: 'GENERAL.YES',
                },
                {
                    id: false,
                    name: 'GENERAL.NO',
                },
            ]
        }
    }
}
