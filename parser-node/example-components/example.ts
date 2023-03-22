import {Component} from '@angular/core';
import {BasicReferencePage} from "../basic.reference.page";
import {ColDef} from "ag-grid-community";
import {SizeModal} from "../../../shared/helpers/modal/modal.component";
import {#compoentClassNameFormComponent} from "./actions/#fileName.form/#fileName.form.component";
import {#moduleNameApiUrls} from "../../src/app/modules/reference/referenceApiUrls";
import {#moduleNameListRequest} from "../../basic/#moduleNameListRequest";
import {FormModalComponent} from "../../src/app/shared/helpers/form.modal/form.modal.component";
import {BasicTablePage} from "../../../../shared/helpers/table/basic/basic.table.page";
import {FilterField, FilterFieldGroup} from "../../src/app/shared/helpers/filter/filter.component/filterField";

@Component({
  templateUrl: './#fileName.component.html',
})
export class #compoentClassNameComponent extends BasicTablePage {
  columnDefs: ColDef[] = [#colDef
  ];

  title = '';
  request = new #moduleNameListRequest(#moduleNameApiUrls.#urlnameUpperCase);

  addUpdate(id = null) {
    FormModalComponent.showModal(#compoentClassNameFormComponent, this.title, id, SizeModal.sm).subscribe(res => {
      if(res)
        this.reload();
    });
  }

  override filter: FilterFieldGroup = {#filterParams
  }
}
