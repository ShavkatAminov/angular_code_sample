import {Component, EventEmitter, Inject, Output} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {InjectorInstance} from "../../shared.module";
import {Observable, Subject} from "rxjs";
import {ModalComponent, SizeModal} from "../modal/modal.component";
import {ModalComponentInterface} from "../modal/modal.component.interface";

@Component({
  selector: 'het-reference-modal',
  styleUrls: ['./confirm.component.scss'],
  templateUrl: './confirm.component.html'
})
export class ConfirmComponent implements ModalComponentInterface{
  public content: string;
  confirm () {
    this.sendClose.next(true)
  }

  close(){
    this.sendClose.next(false)
  }

  sendClose: Subject<any> = new Subject<any>();

  setData(data: any) {
    this.content = data;
  }

}
