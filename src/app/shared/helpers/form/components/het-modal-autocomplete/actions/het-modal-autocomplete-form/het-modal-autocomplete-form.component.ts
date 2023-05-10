import {Component, Inject} from '@angular/core';
import {ModalComponentInterface} from "../../../../../modal/modal.component.interface";
import {Subject} from "rxjs";
import {BasicReferencePage} from "@app/modules/reference/basic.reference.page";
import {ColDef} from "ag-grid-community";
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl, FormGroup} from "@angular/forms";
import {debounceTime} from "rxjs";
import {set} from "@shared/helpers/utils/Lodash";

@Component({
    selector: 'app-het-modal-autocomplete-form',
    templateUrl: './het-modal-autocomplete-form.component.html',
    styleUrls: ['./het-modal-autocomplete-form.component.scss']
})
export class HetModalAutocompleteFormComponent extends BasicReferencePage implements ModalComponentInterface {
    columnDefs: ColDef[] = [];
    form: FormGroup = new FormGroup({});
    data = {
        fields: [],
        colDefs: [],
        request: null,
    };


    addFormControl(field: string) {
        this.form.addControl(field, new FormControl(''));
    }

    handleRowDoubleClicked(data) {
        this.sendClose.next(data);
    }

    sendClose: Subject<any> = new Subject<any>();

    setData(data: any) {
        this.data = data;
        this.columnDefs = data.colDefs;
        this.request = data.request;
        for (const field of data.fields) {
            this.addFormControl(field.name);
        }

        this.form.valueChanges.pipe(debounceTime(500)).subscribe(value => {
            for (const field of data.fields) {
                set(this.request.body, field.name, value[field.name])
            }
            if ( data?.options?.beforeFilter){
                this.request = data.options.beforeFilter(this.request)
            }
            this.reload();
        });
    }
}
