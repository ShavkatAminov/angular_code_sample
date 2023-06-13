import {ChangeDetectorRef, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {FormControl, FormGroup} from "@angular/forms";
import {debounceTime} from "rxjs";
import {set} from "@shared/helpers/utils/Lodash";
import {DatatableComponent} from "@shared/helpers/table/datatable/datatable.component";
import {AbstractSearch} from "@shared/helpers/requests/AbstractSearch";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
    selector: 'app-het-modal-autocomplete-form',
    templateUrl: './het-modal-autocomplete-form.component.html',
    styleUrls: ['./het-modal-autocomplete-form.component.scss']
})
export class HetModalAutocompleteFormComponent implements OnInit{

    constructor(protected dialogRef: MatDialogRef<HetModalAutocompleteFormComponent>,
                @Inject(MAT_DIALOG_DATA) private formData: any,
                protected dc: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        this.setData(this.formData);
    }
    request: AbstractSearch;
    @ViewChild(DatatableComponent) table: DatatableComponent;

    reload() {
        if(this.table) {
            this.table.reloadGrid();
        }
    }

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
        this.dialogRef.close(data);
    }


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
