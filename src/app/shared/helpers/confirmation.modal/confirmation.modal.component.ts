import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {ModalComponent, SizeModal} from "@shared/helpers/modal/modal.component";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Observable} from "rxjs";
import {InjectorInstance} from "@shared/shared.module";
import {FormModalComponentInterface} from "@shared/helpers/form.modal/form.modal.component.interface";
import {ConfirmComponent} from "@shared/helpers/dialog-confirm/confirm.component";

@Component({
  selector: 'app-confirmation.modal',
  templateUrl: './confirmation.modal.component.html',
  styleUrls: ['./confirmation.modal.component.scss']
})
export class ConfirmationModalComponent extends ModalComponent implements OnInit{
  constructor(protected dialogRef: MatDialogRef<ConfirmationModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { component: any, title: string, formData: any },
              protected dc: ChangeDetectorRef) {
    super(dialogRef, data, dc)
    this.component = data.component
    this.title = data.title

  }

  static showModal(title: string, content: string): Observable<any> {
    let dialog: MatDialog = InjectorInstance.get(MatDialog)
    // @ts-ignore
    let dialogRef = dialog.open(ConfirmationModalComponent, {
      data: {component: ConfirmComponent, title: title, formData: content},
      width: ModalComponent.setSize(SizeModal.xsm),
      maxWidth: ModalComponent.setSize(SizeModal.xsm),
      disableClose: true
    });
    return dialogRef.afterClosed();
  }

  save(){
    (this.componentModal.instance as FormModalComponentInterface).save();
  }
  close(){
    this.dialogRef.close()
  }
}
