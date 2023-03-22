import {ColDef, GridOptions, RowClassRules} from "ag-grid-community";
import {DateUtil} from "../../utils/DateUtil";
import {TranslocoService} from "@ngneat/transloco";
import {Component, EventEmitter, Input, Output} from "@angular/core";
import {AbstractSearch} from "../../requests/AbstractSearch";
import {FilterInput} from "@shared/helpers/table/datatable/filter/Input";

@Component({
    template: ''
})
export abstract class BasicDataTable {

    @Input() columnDefs!: ColDef[];
    @Input() defaultColumnDef: ColDef = {};
    basicDefaultColumnDef = {
        sortable: true,
        flex: 10,
        wrapHeaderText: true,
        autoHeaderHeight: true,
        resizable: true,
        floatingFilter: false,
        filter: false,
        floatingFilterComponent: FilterInput,
        floatingFilterComponentParams: {
            suppressFilterButton: true,
        },
        suppressMenu: true,
    };
    @Input() sideToSide?: boolean = false;
    @Input() data!: any[];
    @Input() rowData!: any[];
    @Input() request!: AbstractSearch;
    @Input() rowClassRules!: RowClassRules;
    @Input() dataKey: string | null = 'content'
    @Input() totalKey = 'totalElements'
    @Input() showFilter = true;



    @Output() onSelectionChanged: EventEmitter<{}> = new EventEmitter();
    @Output() gridReady: EventEmitter<{}> = new EventEmitter();
    @Output() filterButtonClick: EventEmitter<{}> = new EventEmitter();
    @Output() pageChanged: EventEmitter<number> = new EventEmitter();
    @Output() onDataLoad: EventEmitter<null> = new EventEmitter();
    @Output() onRowClicked:EventEmitter<any> = new EventEmitter();
    @Output() onRowDoubleClicked: EventEmitter<any> = new EventEmitter();

    protected constructor(protected translate: TranslocoService) {}


    gridOptions: GridOptions = {
        pagination: false,
        rowModelType: 'infinite',
        rowClassRules: {},
        serverSideSortOnServer: true,
    };

    columnTypes =  {
        status: {
            cellClass: params => params.value ? "text-green-500 font-semibold" : "text-orange-500 font-semibold",
            cellRenderer: params => (this.translate.translate((params.value ? "GENERAL.ACTIVE" : "GENERAL.INACTIVE")))
        },
        yesNo: {
            cellRenderer: params => (this.translate.translate((params.value ? "GENERAL.YES" : "GENERAL.NO")))
        },
        date: {
            cellRenderer: params => DateUtil.formatDate(params.value)
        },
        address: {
            cellRenderer: params => {
                let address = ''
                params.value && params.value && params.value.street && params.value.street.nameUz ? address += params.value.street.nameUz + ' ' : address += ''
                params.value && params.value && params.value.buildingNumber ? address += params.value.buildingNumber + ' ' : address += ''
                params.value && params.value && params.value.flatNumber ? address += params.value.flatNumber + ' ' : address += ''
                params.value && params.value && params.value.corpusNumber ? address += params.value.corpusNumber + ' ' : address += ''
                return address
            }
        }
    };
}
