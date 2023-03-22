import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'het-button',
    templateUrl: './het-button.component.html',
    styleUrls: ['./het-button.component.scss']
})
export class HetButtonComponent {

    @Input() label: string = '';
    @Input() widthFull: boolean = false;
    @Input() color: string = '';
    @Input() icon: string = '';
    @Input() class:  string | string[] | Set<string> | { [klass: string]: any; } = null;
    @Input() disabled: boolean = false;
    @Input() type: 'button' | 'reset' | 'submit' = 'button';
    @Output() btnClick = new EventEmitter <null>;
}
