import {Component, EventEmitter, forwardRef, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {BasicFormInput} from "../../basic/basic.form.input";
import {HttpClientService} from "../../../service/http/http.client.service";
import {ModalComponent, SizeModal} from "../../../modal/modal.component";
import {
    HetModalAutocompleteFormComponent
} from "./actions/het-modal-autocomplete-form/het-modal-autocomplete-form.component";
import {ColDef} from "ag-grid-community";
import {AbstractSearch} from "../../../requests/AbstractSearch";
import {ModalAutocompleteField} from "./ModalAutocompleteInterfaces";
import {ModalAutocompleteOpts} from "./ModalAutocompleteInterfaces";
import {getNestedObjectValue} from "../../../utils/Lodash";

@Component({
    selector: 'het-modal-autocomplete',
    templateUrl: './het-modal-autocomplete.component.html',
    styleUrls: ['./het-modal-autocomplete.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => HetModalAutocompleteComponent),
            multi: true
        }
    ],
})
export class HetModalAutocompleteComponent extends BasicFormInput implements OnChanges {
    @Input() opts: ModalAutocompleteOpts;
    @Output() change = new EventEmitter<number>();
    @Output() rowDataChange = new EventEmitter<object>();
    colDefs: ColDef[] = [];
    fields: ModalAutocompleteField[] = [];
    columns: any[] = [];
    styles: string = '';
    labelWidth: number;
    returnField: any;
    request: AbstractSearch;
    options: any;

    valueChange(value: number) {
        this.onChange(value)
        this.change.emit(value)
    }

    values = [];

    constructor(private http: HttpClientService) {
        super();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.columns = this.opts.columns;
        this.styles = this.opts.styles;
        this.request = this.opts.request;
        this.labelWidth = this.opts.labelWidth || 50;
        this.returnField = this.opts.returnField || 'id'
        this.options = this.opts.options

        if (this.columns) {
            this.fields = [];
            this.colDefs = [];

            this.columns.forEach(currentObj => {
                if (currentObj.isFilter || currentObj.isPrimary) {
                    this.fields.push({
                        name: currentObj.field,
                        label: currentObj.headerName,
                        type: currentObj.type,
                        options: currentObj.options || null,
                        isPrimary: currentObj.isPrimary || false,
                        isFilter: currentObj.isFilter || false,
                        isClickable: currentObj.isClickable || false,
                        inputGetter: currentObj.inputGetter,
                        inputGetterFull: currentObj.inputGetterFull,
                        mask: currentObj.mask || ''
                    });
                }

                if(currentObj.isTable) {
                    const tableObj = Object.assign({}, currentObj);
                    const keysToDelete = ['options', 'isPrimary', 'isFilter', 'isTable', 'isClickable', 'inputGetter', 'inputGetterFull', 'mask'];

                    keysToDelete.forEach((key) => {
                        if (key in tableObj) {
                            delete tableObj[key];
                        }
                    });

                    this.colDefs.push(tableObj);
                }
            });
        }
        this.clearInputValues();
    }

    onFocus() {
        ModalComponent.showModal(HetModalAutocompleteFormComponent, null, {
            fields: [...this.fields],
            colDefs: this.colDefs,
            request: this.request,
            options: this.options,
        }, SizeModal.md).subscribe(res => {
            if (res) {
                this.setInputValues(res);

                this.valueChange(res[this.returnField]);
            }
        })
    }

    onInputChange(event) {
        this.request.body['code'] = event.target.value.trim();

        this.http.request(this.request, 'post').subscribe((data) => {
            if(data && data['content'].length > 0) {
                const obj = data['content'][0];
                this.clearInputValues();
                this.setInputValues(obj);
                this.valueChange(obj[this.returnField]);
            }

            delete this.request.body['code'];
        })
    }

    onInput(event, mask) {
        if(event.target.value.length === mask.length) {
            this.onInputChange(event);

            const nextEl = this.getNextFocusableElement();
            if (nextEl) {
                nextEl.focus();
            }
        }
    }


    clearInputValues = () => {
        for (let i = 0; i < this.fields.length; i++) {
            this.values[i] = '';
        }
    }

    setInputValues = (res) => {
        for (let i = 0; i < this.fields.length; i++) {
            const fieldNames = this.fields[i].name.split(".");

            if(typeof this.fields[i].inputGetter === 'function' ){
                this.values[i] = this.fields[i].inputGetter(res[this.fields[i].name]);
            }
            else if(typeof this.fields[i].inputGetterFull === 'function') {
                this.values[i] = this.fields[i].inputGetterFull(res);
            }
            else {
                this.values[i] = getNestedObjectValue(res, fieldNames, null);
            }
        }

        this.rowDataChange.emit(res);
    }

    toNull(){
        this.value = null;
        this.clearInputValues();
        this.valueChange(null);
    }

    override writeValue(obj: any): void {
        if(!obj) {
            this.clearInputValues()
        }
        else {
            this.request.body[this.returnField] = obj;

            this.http.request(this.request, 'post').subscribe((data) => {
                if(data && data['content'].length > 0) {
                    this.setInputValues(data['content'][0]);
                }
                delete this.request.body[this.returnField];
            })
        }
    }

}
