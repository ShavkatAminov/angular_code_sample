import {Observable, Subject} from "rxjs";


export interface ModalComponentInterface {
  sendClose:Subject<any>;
  setData(data: any);
}
