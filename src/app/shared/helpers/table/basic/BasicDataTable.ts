import {ColDef, GridOptions, RowClassRules} from "ag-grid-community";
import {DateUtil} from "../../utils/DateUtil";
import {TranslocoService} from "@ngneat/transloco";
import {Component, EventEmitter, Input, Output} from "@angular/core";
import {AbstractSearch} from "../../requests/AbstractSearch";
import {FilterInput} from "@shared/helpers/table/datatable/filter/Input";
import {UserManagementDropDownRequest} from "@app/modules/user-management/basic/UserManagementDropDownRequest";
import {UserManagementApiUrls} from "@app/modules/user-management/userManagementApiUrls";
import {transferStatus} from "@app/modules/accounting-settlement-lc/enums/transferStatus";

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
    @Input() rowSelection: 'single' | 'multiple' | undefined = 'single';
    @Input() suppressRowClickSelection: boolean | undefined = undefined;



    @Output() onSelectionChanged: EventEmitter<{}> = new EventEmitter();
    @Output() gridReady: EventEmitter<{}> = new EventEmitter();
    @Output() filterButtonClick: EventEmitter<{}> = new EventEmitter();
    @Output() pageChanged: EventEmitter<number> = new EventEmitter();
    @Output() onDataLoad: EventEmitter<null> = new EventEmitter();
    @Output() onRowClicked:EventEmitter<any> = new EventEmitter();
    @Output() onRowDoubleClicked: EventEmitter<any> = new EventEmitter();
    @Output() onRowSelected: EventEmitter<any> = new EventEmitter();
    @Output() onFirstDataRendered: EventEmitter<any> = new EventEmitter();

    protected constructor(protected translate: TranslocoService) {}


    gridOptions: GridOptions = {
        pagination: false,
        rowModelType: 'infinite',
        rowClassRules: {},
        serverSideSortOnServer: true,
    };

    columnTypes =  {
        status: {
            floatingFilterComponentParams: {
                type: 'status',
            },
            cellClass: params => params.value ? "text-green-500 font-semibold" : "text-orange-500 font-semibold",
            cellRenderer: params => (this.translate.translate((params.value ? "GENERAL.ACTIVE" : "GENERAL.INACTIVE")))
        },
        transferStatus: {
            floatingFilterComponentParams: {
                type: 'select',
                options: [
                    {id: '', name: ''},
                    {id: 'INTRODUCED', name: this.translate.translate("GENERAL.INTRODUCED")},
                    {id: 'APPROVED', name: this.translate.translate("GENERAL.APPROVED")}
                ]
            },
            cellRenderer: params => (this.translate.translate((params.value === transferStatus.INTRODUCED ? "GENERAL.INTRODUCED" : "GENERAL.APPROVED")))
        },
        electronicPaymentAccess: {
            floatingFilterComponentParams: {
                type: 'select',
                options: [
                    {id: null, name: ''},
                    {id: true, name: this.translate.translate("GENERAL.INTRODUCED")},
                    {id: false, name: this.translate.translate("GENERAL.APPROVED")}
                ]
            },
            cellRenderer: params => (this.translate.translate((params.value === transferStatus.INTRODUCED ? "GENERAL.INTRODUCED" : "GENERAL.APPROVED")))
        },
        yesNo: {
            floatingFilterComponentParams: {
                type: 'yesNo',
            },
            cellRenderer: params => (this.translate.translate((params.value ? "GENERAL.YES" : "GENERAL.NO")))
        },
        date: {
            floatingFilterComponentParams: {
                type: 'date',
            },
            minWidth: 280,
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
        },
        code_nameUz: {
            cellRenderer: params => {
                let result = ''
                params.value && params.value && params.value.code ? result += params.value.code  + ' - ' : result += ''
                params.value && params.value && params.value.nameUz ? result += params.value.nameUz + ' ' : result += ''
                return result;
            }
        },
        user: {
            minWidth: 300,
            floatingFilterComponentParams: {
                type: 'autocomplete-search',
                request: new UserManagementDropDownRequest(UserManagementApiUrls.USER)
            },
        }
    };
}
