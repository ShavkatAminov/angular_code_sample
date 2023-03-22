
export class FilterField {
    constructor(
            public label: string,
            public type: fieldTypes = 'input',
            public options: any = {},
            public value: any = null,
        ) {}
}

export type fieldTypes =
    'input' | 'date' | 'radio' | 'datetime' |
    'checkbox' | 'textarea' | 'autocomplete' |
    'yesNo' | 'status' | 'select';


export interface FilterFieldGroup {
    [key: string]: FilterField;
}
