import {Component, forwardRef, Input, OnInit} from '@angular/core';

import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {HetInputComponent} from "@shared/helpers/form/components/het-input/het-input.component";
import {HttpClientService} from "@shared/helpers/service/http/http.client.service";
import {ReferenceDropDownRequest} from "@app/modules/reference/basic/ReferenceDropDownRequest";
import {ReferenceApiUrls} from "@app/modules/reference/referenceApiUrls";
import {AlertServiceComponent} from "@shared/helpers/alerts/services/alert.service.component";

@Component({
    selector: 'het-tel-input',
    templateUrl: './het-tel-input.component.html',
    styleUrls: ['./het-tel-input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => HetTelInputComponent),
            multi: true
        }
    ]
})

export class HetTelInputComponent extends HetInputComponent implements OnInit{
    constructor(public http: HttpClientService, public alert: AlertServiceComponent) {
        super();
    }

    areaCodeOptions: any = [
        {
            name: null,
            id: null,
        }
    ];

    prefix: string = '';
    selectedPrefixId = null;
    fullPhoneNumber: string;
    @Input() mask = "000-00-00";

    override valueChange(value: string) {
        if(value && this.prefix) {
            this.fullPhoneNumber = (this.prefix + value).replaceAll('-','');
            this.fullPhoneNumber = this.fullPhoneNumber.slice(1, this.fullPhoneNumber.length);


            this.onChange(this.fullPhoneNumber);
            this.change.emit(this.fullPhoneNumber);

        } else {
            this.onChange(null);
            this.change.emit(null);
        }
    }

    override toNull($event){
        this.value = null;
        this.onChange(null);
        this.change.emit(null);
        this.clear.emit(null);
        $event.stopPropagation();
    }

    phoneDropdownRequest = new ReferenceDropDownRequest(ReferenceApiUrls.PHONE_CODE);

    onSelectChange(id) {
        if(id) {
            const selectedArea = this.areaCodeOptions.find(item => item.id === id);
            this.prefix = selectedArea.name;
        } else {
            this.prefix = '';
        }

        this.valueChange(this.value);
    }

    ngOnInit(): void {
        this.http.request(this.phoneDropdownRequest,'post').subscribe(res => {
            if(res) {
                this.areaCodeOptions = structuredClone(Object(res)).map(item => {
                    return {
                        name: item.code, id: item.id
                    }
                });

                this.writeValue(this.fullPhoneNumber);
            }
        })
    }
    override writeValue(data: string) {
        if(data) {
            if(data.toString().length > 5) {
                if(data.includes("+")) {
                    this.prefix = data.slice(0, 6);
                } else {
                    this.prefix = "+" + data.slice(0, 5);
                }

                const selectedAreaCode = this.areaCodeOptions.find(item => item.name == this.prefix);
                this.selectedPrefixId = selectedAreaCode?.id;

                this.value = data.includes("+") ? data.slice(6) : data.slice(5);
                this.fullPhoneNumber = this.prefix + this.value;
            }
        }
        else {
            this.onChange(null);
            this.change.emit(null);
        }
    }
}
