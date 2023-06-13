import {BasicForm} from "../basic/basic.form";
import {Subject} from "rxjs";
import {HttpClientService} from "../../service/http/http.client.service";
import {Injectable} from "@angular/core";
import {TranslocoService} from "@ngneat/transloco";
import {FormModalComponentInterface} from "../../form.modal/form.modal.component.interface";
import {AlertServiceComponent} from "../../alerts/services/alert.service.component";

@Injectable()
export abstract class BasicModalForm extends BasicForm implements FormModalComponentInterface {
    constructor(public http: HttpClientService, public translate: TranslocoService,public alert:AlertServiceComponent) {
     super(http, translate,alert);
    }

    save() {
       this.saveProcess()
    }
    override request: any;

    sendClose: Subject<any> = new Subject<any>();
    setData(data: any) {
        if(data) {
            this.request.id = data;
            this.http.request(this.request, 'get').subscribe(res => {
                this.form.patchValue(res);
            })
        }
    }

    saveCallback(result: Object) {
        this.sendClose.next(true);
    }

}
