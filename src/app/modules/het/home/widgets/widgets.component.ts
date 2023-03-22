import {Component, OnInit} from '@angular/core';
import {BasicForm} from "../../../../shared/helpers/form/basic/basic.form";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ColDef} from "ag-grid-community";
import {OptionsObj} from "../../../../shared/helpers/form/interfaces/options";
import {ModalComponent, SizeModal} from "../../../../shared/helpers/modal/modal.component";
import {ModalComponentInterface} from "../../../../shared/helpers/modal/modal.component.interface";
import {Subject} from 'rxjs';
import {ReferenceDropDownRequest} from "../../../reference/basic/ReferenceDropDownRequest";
import {ReferenceApiUrls} from "../../../reference/referenceApiUrls";
import {ReferenceListRequest} from "../../../reference/basic/ReferenceListRequest";

@Component({
    templateUrl: './widgets.component.html',
    styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent extends BasicForm implements OnInit, ModalComponentInterface {
    setData(data: any) {
        console.log(data);
    }

    sendClose: Subject<any> = new Subject<any>();
    override form: FormGroup = new FormGroup({
        name: new FormControl(null, [Validators.required]),
        select: new FormControl(null, [Validators.required]),
        radio: new FormControl(null, [Validators.required]),
        checkbox: new FormControl(null, [Validators.required]),
        textarea: new FormControl(null, [Validators.required]),
        date: new FormControl(null, [Validators.required]),
        textInput: new FormControl(null, [Validators.required]),
        checkboxlist: new FormControl(null, [Validators.required]),
        autocomplete: new FormControl(null, [Validators.required]),
        autocompleteModal: new FormControl(null, [Validators.required]),
        newForm: new FormGroup({
            date: new FormControl(null, [Validators.required]),
        }),
    });

    ngOnInit(): void {
        this.form.valueChanges.subscribe(value => {
            console.log(value, 2222);
        });
    }

    openModal(): void {
        ModalComponent.showModal(WidgetsComponent, "This is Title", SizeModal.xsm).subscribe(x => {
            console.log(x)
        })
    }


    columnDefs: ColDef[] = [
        {field: 'make', headerName: 'mmm'},
        {field: 'model', headerName: 'mmm'},
        {field: 'price', headerName: 'mmm'}
    ];

    rowData = [
        {make: 'Toyota', model: 'Celica', price: 35000},
        {make: 'Ford', model: 'Mondeo', price: 32000},
        {make: 'Ford', model: 'Mondeo', price: 32000},
        {make: 'Ford', model: 'Mondeo', price: 32000},
        {make: 'Ford', model: 'Mondeo', price: 32000},
        {make: 'Ford', model: 'Mondeo', price: 32000},
        {make: 'Ford', model: 'Mondeo', price: 32000},
        {make: 'Ford', model: 'Mondeo', price: 32000},
        {make: 'Ford', model: 'Mondeo', price: 32000},
        {make: 'Porsche', model: 'Boxster', price: 72000}
    ];

    options: OptionsObj[] = [{
        id: 1,
        name: 'apple',
    }, {
        id: 1,
        name: 'mac',
    }, {
        id: 1,
        name: 'iphone',
    }]
    request = new ReferenceDropDownRequest(ReferenceApiUrls.METER_TYPE);


    modalAutoCompleteOpts = {
        columns: [
            {
                field: 'code', // formControlName
                headerName: 'GENERAL.CODE', // Input Label
                type: 'input', //  Type -> 'input' | 'date' | 'radio' | 'datetime' | 'checkbox' | 'textarea' | 'autocomplete' | 'yesNo' | 'status' | 'select';
                isPrimary: true, // False bo'lsa asosiy inputda chiqmidi (default = false);
                isFilter: true, //  False bo'lsa qidirishda chiqmidi (default = false);
                isTable: true,   // False bo'lsa TABLE da chiqmidi, default value barilishi shart!
                // options: [] // HetAutcomplete ishlatishda options REQUEST bo'ladi, HetSelect bo'lsa options, ARRAY OF OBJECTS bo'ladi;
                inputGetterFull: (data) => {
                    console.log(data);
                    return 'data';
                },
                isClickable: true // Input bosiladigan qilish, qolganlari readonly bolib qoladi, Kamida 1 input clickable bo'lishi garak (default = false).
            },
            {
                flex: 20,
                field: 'nameUz',
                headerName: 'GENERAL.NAME',
                type: 'input',
                isFilter: true,
                isTable: false
            },
            {
                flex: 20,
                field: 'address',
                headerName: 'GENERAL.ADDRESS',
                isTable: true
            }
        ],
        styles: 'flex flex-auto gap-x-4',
        request: new ReferenceListRequest(ReferenceApiUrls.BANKS),
        returnField: 'id'
    }
    onModalAutoCompleteChange(data) {
        console.log(data);
    }

    minDate = new Date();
    maxDate = new Date(2023, 11, 31);
}
