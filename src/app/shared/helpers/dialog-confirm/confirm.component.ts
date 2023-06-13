import {Component} from '@angular/core';
import {Subject} from "rxjs";
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

  setData(data: string) {
    this.content = data;
  }

}
