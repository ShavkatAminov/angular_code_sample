import {Component} from "@angular/core";
import {IFloatingFilterAngularComp} from "ag-grid-angular";
import {FormControl} from "@angular/forms";
import {FilterChangedEvent, IFloatingFilterParams} from "ag-grid-community";
import {IRequest} from "@shared/helpers/service/http/IRequest";
import {OptionsObj} from "@shared/helpers/form/interfaces/options";
import {debounceTime} from "rxjs";

@Component({
    selector: 'filter-input',
    templateUrl: 'input.html',
    styleUrls: ['Input.css']
})
export class FilterInput implements IFloatingFilterAngularComp  {
    control: FormControl = new FormControl();
    params: IFloatingFilterParams;
    type: string = 'input';
    request: IRequest;
    options: OptionsObj[];

    agInit(params: IFloatingFilterParams<any> & FilterAdditionalParams): void {
        this.params = params;
        if(params.type)
            this.type = params.type;
        if(params.request)
            this.request = params.request;
        if(params.options)
            this.options = params.options;
        if(params.disabled) {
            this.control.disable();
        }
        else {
            this.control.enable();
        }
        this.control.valueChanges.pipe(debounceTime(500)).subscribe( res => {
            if(res === '')
                res = null;
            this.params.parentFilterInstance((instance) => {
                instance.onFloatingFilterChanged('equal',   JSON.stringify({value: res}));
            });
        });
    }

    onParentModelChanged(parentModel: any, filterChangedEvent?: FilterChangedEvent | null): void {
        if(parentModel && parentModel.filter) {
            let filterValue = parentModel.filter;
                filterValue = JSON.parse(filterValue);
            if(filterValue?.value && filterValue.value != this.control.value) {
                this.control.setValue(filterValue.value, {emitEvent: false, onlySelf: false, });
            }
        }
    }
}

export interface FilterAdditionalParams {
    type: string,
    request: IRequest,
    options: OptionsObj[],
    disabled: boolean,
}
