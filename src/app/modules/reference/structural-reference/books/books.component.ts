import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {BooksFormComponent} from "./actions/books.form/books.form.component";
import {BasicReferencePage} from "../../basic.reference.page";
import {SizeModal} from "@shared/helpers/modal/modal.component";
import {ReferenceListRequest} from "../../basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../referenceApiUrls";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {basicTemplate} from "../../basic/basicTemplate";

@Component({
  template: basicTemplate(),
})
export class BooksComponent extends BasicReferencePage {
  columnDefs: ColDef[] = [
      {field: 'code', maxWidth: 204, headerName: 'GENERAL.CODE'},
      {field: 'nameUz', headerName: 'GENERAL.NAME'},
      {field: 'status',  maxWidth: 204, headerName: 'GENERAL.STATUS', type: 'status'},
  ];

  title = 'MENU.REFERENCE.STRUCTURAL_GUIDES.DIRECTORY_OF_BOOKS';
  request = new ReferenceListRequest(ReferenceApiUrls.BOOKS);

  addUpdate(id = null) {
    FormModalComponent.showModal(BooksFormComponent, this.title, id, SizeModal.xsm).subscribe(res => {
      if(res)
        this.reload();
    });
  }
}
