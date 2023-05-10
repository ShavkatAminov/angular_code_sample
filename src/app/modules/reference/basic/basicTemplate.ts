


export function basicTemplate(additionalHtml: string = ''): string {
    return `<div class="flex flex-col flex-auto min-w-0 p-6 pt-1">
                <het-title [title]="title"></het-title>
                <div class="h-full">
                    <het-datatable #table
                                   (gridReady)="reload()"
                                   [request]="request"
                                   [showFilter]="false"
                                   (onSelectionChanged)="changeSelection($event)"
                                   (filterButtonClick)="openFilter()"
                                   (onRowDoubleClicked)="handleDoubleClick($event)"
                                   [columnDefs]="columnDefs"
                                   [defaultColumnDef]="defaultColumnDef">
                       
                            <het-button (btnClick)="addUpdate()" [label]="'FORM.ADD'"></het-button>
                            <het-button [disabled]="selectedRowId === null" (btnClick)="addUpdate(this.selectedRowId)" [label]="'FORM.UPDATE'"></het-button>
                            ${additionalHtml}
                       
                    </het-datatable>
                </div>
            </div>`
}
