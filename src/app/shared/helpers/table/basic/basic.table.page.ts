import {AbstractSearch} from "../../requests/AbstractSearch";
import {Component, ViewChild} from "@angular/core";
import {DatatableComponent} from "../datatable/datatable.component";
import {FilterFieldGroup} from "../../filter/filter.component/filterField";
import {ModalComponent, SizeModal} from "../../modal/modal.component";
import {FilterComponent} from "../../filter/filter.component/filter.component.component";
import {ColDef} from "ag-grid-community";

@Component({
    template: "",
})
export class BasicTablePage {

    defaultColumnDef: ColDef = {
        floatingFilter: true,
        filter: true,
    };

    title = '';
    request: AbstractSearch;

    selectedRowId: number | null = null;
    selectedRowData: any | null = null;

    changeSelection(event) {
        this.selectedRowId = event.id;
        this.selectedRowData = event
    }
    @ViewChild(DatatableComponent) table: DatatableComponent;

    reload() {
        if(this.table) {
            this.table.reloadGrid();
        }
    }

    filter: FilterFieldGroup;

    openFilter() {
        ModalComponent.showModal(FilterComponent, 'FORM.FILTER', this.filter, SizeModal.sm).subscribe(res => {
            if(res) {
                Object.keys(res).forEach(key => {
                    this.filter[key].value = res[key];
                })
                this.request.body = {...this.request.body, ...res};
                this.reload();
            }
        })
    }

    addUpdate(id){};

    handleDoubleClick(data, func = this.addUpdate) {
        func.call(this, data.id);
    }

}
