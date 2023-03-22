import { Component } from '@angular/core';
import {ModalComponentInterface} from "../../modal/modal.component.interface";
import {Subject} from "rxjs";
import {FilterFieldGroup} from "./filterField";
import {FormControl, FormGroup} from "@angular/forms";
import { KeyValue } from '@angular/common';

@Component({
  templateUrl: './filter.component.component.html',
})
export class FilterComponent implements ModalComponentInterface {
  sendClose: Subject<any> = new Subject<any>();

  form: FormGroup = new FormGroup<any>({});
  listFields: any = null;
  setData(data: FilterFieldGroup) {
    this.listFields = data;
    Object.keys(data).forEach(key => {
      this.form.addControl(key, new FormControl(data[key].value));
    });
  }

  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }

  submit() {
    this.sendClose.next(this.form.value);
  }

  close() {
    this.sendClose.next(null);
  }

  clear() {
    this.form.reset();
  }

}
