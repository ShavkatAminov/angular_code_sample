import {AfterContentInit, Component, ViewChild, Input, OnInit} from '@angular/core';
import {
  GridApi,
  HeaderValueGetterParams,
  IDatasource,
  IGetRowsParams,
} from "ag-grid-community";
import {HttpClientService} from "../../service/http/http.client.service";
import {TranslocoService} from "@ngneat/transloco";
import {PaginationComponent} from "../pagination/pagination.component";
import {BasicDataTable} from "../basic/BasicDataTable";

@Component({
  selector: 'het-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent extends BasicDataTable implements AfterContentInit, OnInit {


  @ViewChild(PaginationComponent) paginationComponent: PaginationComponent;
  totalElements: number = 0;

  dataSource!: IDatasource;
  @Input() checkPagination:boolean = true;
  constructor(private cof: HttpClientService, protected translate: TranslocoService) {
    super(translate);
    this.translate.langChanges$.subscribe(() => {
      if(this.gridApi) {
        this.gridApi.refreshHeader();
      }
    });

  }

  ngOnInit(): void {
        this.gridOptions.rowModelType = this.rowModelType;
    }

  paginationChanged(pageOptions) {
    this.request.body = {...this.request.body, ...{pageable: pageOptions}};
    this.reloadGrid();
  }

  ngAfterContentInit(): void {
    this.columnDefs.forEach(column => {
      column.headerValueGetter = (params: HeaderValueGetterParams) => this.translate.translate(params.colDef.headerName!);
    });
    this.gridOptions.rowClassRules = this.rowClassRules;
    this.basicDefaultColumnDef = {
      ...this.basicDefaultColumnDef, ...this.defaultColumnDef,
    }
  }

  gridApi!: GridApi;

  onGridReady(params: any) {
    this.gridApi = params.api;
    if (this.sideToSide) {
      this.gridApi.sizeColumnsToFit();
    }
    this.gridOptions.rowClassRules = this.rowClassRules;
    this.gridReady.emit(true);
  }

  addedFilterParams = {};

  public reloadGrid() {
    this.dataSource = {
      getRows: (params: IGetRowsParams) => {
        if (!this.request) {
          params.successCallback([], 0);
          return;
        }
        let filter = {};
        if(params.filterModel) {
          Object.keys(params.filterModel).forEach(key => {
            let filterValue = params.filterModel[key].filter;
            if(JSON.parse(filterValue)?.value != null && JSON.parse(filterValue)?.value != undefined)
              filter[key] = JSON.parse(filterValue)?.value;
          })
        }
        this.request.setFilterProperties(filter, this.addedFilterParams);
        this.addedFilterParams = filter;
        if(params.sortModel.length > 0) {
          this.request.setSortParams(params.sortModel[0]);
        }
        else {
          this.request.clearSort();
        }
        this.cof.request(this.request, "post").subscribe((response: any) => {
          params.successCallback( (this.dataKey ? response[this.dataKey] : response), response[this.dataKey].length);
          if(this.paginationComponent?.totalPages) {
            this.paginationComponent.totalPages = response['totalPages'];
            this.totalElements = response['totalElements'];
          }
        });
      }
    }
    if (this.gridApi) {
      this.gridApi.setDatasource(this.dataSource);
    }
  }

  onSelectionChangedEvent() {
    const selectedRows = this.gridApi.getSelectedRows();

    if(selectedRows.length === 1) {
      this.onSelectionChanged.emit(selectedRows[0]);
    }

    this.onSelectedRowsChanged.emit(selectedRows);
  }
  onFilterChanged(event) {
      this.filterChangeEmitter.emit(event)
  }
  onRowSelectedEvent(event) {
    this.onRowSelected.emit(event);
  }

  onFirstDataRenderedEvent(event) {
    this.onFirstDataRendered.emit(event);
  }

  handleRowClicked(event:any){
    this.onRowClicked.emit(event && event.data ? event.data : null);
    this.onRowSelectIndex.emit(event.rowIndex)
  }

  handleRowDoubleClicked(event: any) {
    this.onRowDoubleClicked.emit(event && event.data ? event.data : null);
  }
}
