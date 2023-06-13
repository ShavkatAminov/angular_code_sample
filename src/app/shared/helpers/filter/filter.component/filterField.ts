
export class FilterField {
    constructor(
            public label: string,
            public type: fieldTypes = 'input',
            public options: any = {},
            public value: any = null,
            public inputMask: string = '',
        ) {}
}

export type fieldTypes =
    'input' | 'date' | 'radio' | 'datetime' | 'daterange' |
    'checkbox' | 'textarea' | 'autocomplete' | 'autocomplete-search' |
    'yesNo' | 'status' | 'select' | 'year-picker' | 'month-picker' | 'address';


export interface FilterFieldGroup {
    [key: string]: FilterField;
}
