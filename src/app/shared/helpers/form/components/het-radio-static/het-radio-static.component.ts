import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {HetRadioButtonComponent} from "../het-radio-button/het-radio-button.component";
import {NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
    selector: 'het-radio-static',
    template: '<het-radio-button [widthLabel]="widthLabel" [readonly]="readonly" [color]="color" [options]="options" [class]="class" (selectionChanged)="onselectionchange($event)" [(ngModel)]="value" [required]="required" [label]="label" [disabled]="disabled" [showError]="showError" [errorMessage]="errorMessage"></het-radio-button>',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => HetRadioStaticComponent),
            multi: true
        }
    ]
})
export class HetRadioStaticComponent extends HetRadioButtonComponent implements OnInit {

    @Input() type: 'status' | 'yesNo' = "status";
    override options = [
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
