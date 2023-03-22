


export function basicTemplate(additionalHtml: string = ''): string {
    return `<div class="flex flex-col flex-auto min-w-0 p-6 pt-1">
                <het-title [title]="title"></het-title>
                <div>
                    <het-datatable #table
                                   (gridReady)="reload()"
                                   [request]="request"
                                   (onSelectionChanged)="changeSelection($event)"
                                   (filterButtonClick)="openFilter()"
                                   (onRowDoubleClicked)="handleDoubleClick($event)"
                                   [columnDefs]="columnDefs"
                                   [defaultColumnDef]="defaultColumnDef"
                                   >
                        <div class="flex gap-x-2">
                            <het-button (btnClick)="addUpdate()" [label]="'FORM.ADD'"></het-button>
                            <het-button [disabled]="selectedRowId === null" (btnClick)="addUpdate(this.selectedRowId)" [label]="'FORM.UPDATE'"></het-button>
                            ${additionalHtml}
                        </div>
                    </het-datatable>
                </div>
            </div>`
}
