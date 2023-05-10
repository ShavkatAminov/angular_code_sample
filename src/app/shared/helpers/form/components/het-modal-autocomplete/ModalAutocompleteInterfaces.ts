import {fieldTypes} from "../../../filter/filter.component/filterField";
import {AbstractSearch} from "../../../requests/AbstractSearch";
import {EventEmitter} from "@angular/core";

export interface ModalAutocompleteField {
    name: string,
    label: string,
    type: fieldTypes,
    isPrimary: boolean,
    isFilter: boolean,
    isClickable: boolean,
    options: any,
    inputGetter: (data) => any;
    inputGetterFull: (data) => any;
    mask: string;
}

export interface ModalAutocompleteOpts {
    columns: any[],
    styles?: string,
    request: AbstractSearch,
    labelWidth?: number,
    returnField?: any,
    options?: {
        beforeFilter:  (a :AbstractSearch) => AbstractSearch
    },
}