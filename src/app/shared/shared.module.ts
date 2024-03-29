import {Injector, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatChipsModule} from "@angular/material/chips";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatDividerModule} from "@angular/material/divider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";
import {MatSelectModule} from "@angular/material/select";
import {HetCheckboxComponent } from './helpers/form/components/het-checkbox/het-checkbox.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { HetButtonComponent } from './helpers/form/components/het-button/het-button.component';
import { HetSelectComponent } from './helpers/form/components/het-select/het-select.component';
import { HetDatepickerComponent } from './helpers/form/components/het-datepicker/het-datepicker.component';
import { HetRadioButtonComponent } from './helpers/form/components/het-radio-button/het-radio-button.component';
import {MatRadioModule} from "@angular/material/radio";
import { DatatableComponent } from './helpers/table/datatable/datatable.component';
import {TranslocoModule} from "@ngneat/transloco";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {AgGridModule} from "ag-grid-angular";
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";
import { HostDirective } from './helpers/modal/host.directive';
import { ModalComponent } from './helpers/modal/modal.component';
import { FormModalComponent } from './helpers/form.modal/form.modal.component';
import { HetTextareaComponent } from './helpers/form/components/het-textarea/het-textarea.component';
import {HetInputComponent} from "./helpers/form/components/het-input/het-input.component";
import { HetRadioStaticComponent } from './helpers/form/components/het-radio-static/het-radio-static.component';
import { PaginationComponent } from './helpers/table/pagination/pagination.component';
import { HetTitleComponent } from './helpers/form/components/het-title/het-title.component';
import { HetAutocompleteComponent } from './helpers/form/components/het-autocomplete/het-autocomplete.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {BasicTablePage} from "./helpers/table/basic/basic.table.page";
import { HetModalAutocompleteComponent } from './helpers/form/components/het-modal-autocomplete/het-modal-autocomplete.component';
import { HetModalAutocompleteFormComponent } from './helpers/form/components/het-modal-autocomplete/actions/het-modal-autocomplete-form/het-modal-autocomplete-form.component';
import { FilterComponent } from './helpers/filter/filter.component/filter.component.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {ConfirmComponent} from "./helpers/dialog-confirm/confirm.component";
import {InputToUppercase} from "./helpers/form/directive/InputToUppercaseDirective";
import {HetAddressComponent} from "./helpers/form/components/het-address/het-address.component";
import {NgxMaskDirective, NgxMaskPipe, provideNgxMask} from "ngx-mask";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {AlertsComponent} from "./helpers/alerts/alerts.component";
import { ErrorPopoverComponent } from './helpers/form/components/error-popover/error-popover.component';
import { HetCheckboxListComponent } from './helpers/form/components/het-checkbox-list/het-checkbox-list.component';
import {FilterInput} from "@shared/helpers/table/datatable/filter/Input";
import {HetSelectStaticComponent} from "@shared/helpers/form/components/het-select-static/het-select-static.component";
import {HetNumberInputComponent} from "@shared/helpers/form/components/het-number-input/het-number-input.component";
import {MatTabsModule} from '@angular/material/tabs';
import {HetDatepickerRange} from "@shared/helpers/form/components/het-datepicker-range/het-datepicker-range";
import {
    HetAutocompleteSearchComponent
} from "@shared/helpers/form/components/het-autocomplete-search/het-autocomplete-search.component";
import {HetInformationTable} from "@shared/helpers/table/het-information-table/het.information.table";
import {HetTelInputComponent} from "@shared/helpers/form/components/het-tel-input/het-tel-input.component";
import { DateGeneratorPipe } from './helpers/pipe/date-generator.pipe';
import { HetInputMonthsComponent } from '@app/modules/accounting-settlement-lc/maintaining.contract/het-input-months/het-input-months.component';
import { HetTimepickerComponent } from './helpers/form/components/het-timepicker/het-timepicker.component';
import {UnderscoreMaskDirective} from "@shared/helpers/form/directive/underscoreMaskDirective";
import {
    InputToCapitalizeDirective
} from "@shared/helpers/form/directive/InputToCapitalizeDirective";
import { HetYearPickerComponent } from './helpers/form/components/het-year-picker/het-year-picker.component';
import { HetTimepickerRangeComponent } from './helpers/form/components/het-timepicker-range/het-timepicker-range.component';
import {OverlayModule} from "@angular/cdk/overlay";
import { ConfirmationModalComponent } from './helpers/confirmation.modal/confirmation.modal.component';
import {HetKwtInputComponent} from "@shared/helpers/form/components/het-kwt-input/het-kwt-input.component";
import {HetSumInputComponent} from "@shared/helpers/form/components/het-sum-input/het-sum-input.component";


export let InjectorInstance: Injector;
@NgModule({
    declarations: [
        AlertsComponent,
        HetSelectComponent,
        HetButtonComponent,
        HetDatepickerComponent,
        HetDatepickerRange,
        HetCheckboxComponent,
        HetRadioButtonComponent,
        HetTextareaComponent,
        DatatableComponent,
        HostDirective,
        ModalComponent,
        FormModalComponent,
        HetInputComponent,
        HetRadioStaticComponent,
        PaginationComponent,
        HetTitleComponent,
        HetAutocompleteComponent,
        HetAutocompleteSearchComponent,
        BasicTablePage,
        HetModalAutocompleteComponent,
        HetModalAutocompleteFormComponent,
        FilterComponent,
        ConfirmComponent,
        InputToUppercase,
        HetAddressComponent,
        ErrorPopoverComponent,
        HetCheckboxListComponent,
        FilterInput,
        HetSelectStaticComponent,
        HetNumberInputComponent,
        HetInformationTable,
        HetTelInputComponent,
        DateGeneratorPipe,
        HetInputMonthsComponent,
        HetTimepickerComponent,
        UnderscoreMaskDirective,
        InputToCapitalizeDirective,
        HetDatepickerComponent,
        HetYearPickerComponent,
        HetTimepickerRangeComponent,
        ConfirmationModalComponent,
        HetKwtInputComponent,
        HetSumInputComponent
    ],
    exports: [
        AlertsComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HetButtonComponent,
        HetSelectComponent,
        MatFormFieldModule,
        HetRadioButtonComponent,
        HetCheckboxComponent,
        DatatableComponent,
        HostDirective,
        ModalComponent,
        HetTextareaComponent,
        HetInputComponent,
        MatDatepickerModule,
        HetDatepickerComponent,
        HetDatepickerRange,
        HetRadioStaticComponent,
        HetTitleComponent,
        HetModalAutocompleteComponent,
        FilterComponent,
        HetAutocompleteComponent,
        HetAutocompleteSearchComponent,
        InputToUppercase,
        HetAddressComponent,
        HetCheckboxListComponent,
        FilterInput,
        HetSelectStaticComponent,
        HetNumberInputComponent,
        MatTabsModule,
        HetInformationTable,
        HetTelInputComponent,
        DateGeneratorPipe,
        HetInputMonthsComponent,
        HetTimepickerComponent,
        UnderscoreMaskDirective,
        InputToCapitalizeDirective,
        HetDatepickerComponent,
        HetYearPickerComponent,
        HetTimepickerRangeComponent,
        HetKwtInputComponent,
        HetSumInputComponent
    ],
    imports: [
        NgxMaskDirective,
        NgxMaskPipe,
        MatButtonModule,
        MatButtonToggleModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatSelectModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatRadioModule,
        TranslocoModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        AgGridModule,
        MatDialogModule,
        MatAutocompleteModule,
        NgxMaterialTimepickerModule,
        MatSnackBarModule,
        DragDropModule,
        MatSnackBarModule,
        MatTabsModule,
        OverlayModule,
    ],
    providers: [
        provideNgxMask({
            validation:false
        })
    ],

})
export class SharedModule
{
    constructor(public injector:Injector) {
        InjectorInstance =injector
    }
}
