import {ChangeDetectorRef, Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {InjectorInstance} from "../../shared.module";
import {Observable} from "rxjs";
import {FormModalComponentInterface} from "./form.modal.component.interface";
import {ModalComponent, SizeModal} from "../modal/modal.component";

@Component({
  selector: 'het-reference-modal',
  styleUrls: ['./form.modal.component.scss'],
  templateUrl: './form.modal.component.html'
})
export class FormModalComponent extends ModalComponent {
  constructor(protected dialogRef: MatDialogRef<FormModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { component: any, title: string, formData: any },
              protected dc: ChangeDetectorRef) {
    super(dialogRef, data, dc)
    this.component = data.component
    this.title = data.title

  }

   static showModal(component: any, title: string, formData: any = null, size: SizeModal = SizeModal.lg): Observable<any> {
    let dialog: MatDialog = InjectorInstance.get(MatDialog)
    // @ts-ignore
    let dialogRef = dialog.open(FormModalComponent, {
      data: {component: component, title: title, formData: formData},
      width: ModalComponent.setSize(size),
      maxWidth: ModalComponent.setSize(size),
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
