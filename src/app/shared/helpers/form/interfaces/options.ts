export interface OptionsObj {
    id: any;
    name: string;
}
export interface Options {
    code: string;
    id: number;
    name: string;
}

export interface OptionsCheckbox extends Options {
    checked: boolean;
}
