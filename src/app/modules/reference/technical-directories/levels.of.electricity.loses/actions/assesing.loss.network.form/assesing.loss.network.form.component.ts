import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subject} from "rxjs";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {ReferenceDropDownRequest} from "../../../../basic/ReferenceDropDownRequest";

@Component({
  selector: 'app-assesing.loss.network.form',
  templateUrl: './assesing.loss.network.form.component.html',
  styleUrls: ['./assesing.loss.network.form.component.scss']
})
export class AssesingLossNetworkFormComponent extends BasicModalForm{
  
  override form = new FormGroup({
    validityDate: new FormControl(null, [Validators.required]),
    coatoId: new FormControl(null, [Validators.required]),
    networkSuppliedEnery: new FormControl(null, [Validators.required]),
    losses: new FormControl(null, [Validators.required]),
    avgLossPercentage: new FormControl(null, [Validators.required]),
    minimumLoss: new FormControl(null, [Validators.required]),
    minimumLossPercentage: new FormControl(null, [Validators.required]),
    maximumLoss: new FormControl(null, [Validators.required]),
    maximumLossPercentage: new FormControl(null, [Validators.required]),
    standardValuesId: new FormControl(null, [Validators.required]),
    status: new FormControl(true, [Validators.required]),
  });

  override request = new ReferenceFormRequest(ReferenceApiUrls.LEVELS_OF_ELECTRICITY_LOSES);
  autocompleteRequest = new ReferenceDropDownRequest(ReferenceApiUrls.STANDARD_VALUES);
  coatoRequest = new ReferenceDropDownRequest(ReferenceApiUrls.COATO_BRANCHES);

  sendClose: Subject<any> = new Subject<any>();
  setData(data: any) {
    if(data) {
      this.request.id = data;
      this.http.request(this.request, 'get').subscribe((res:any) => {
        this.form.patchValue(res);
      })
    }
  }


  override beforeSave() {
    this.request.body = this.form.value;
    this.request.body.networkSuppliedEnery = parseInt(this.request.body.networkSuppliedEnery);
    this.request.body.losses = parseInt(this.request.body.losses);
    this.request.body.avgLossPercentage = parseInt(this.request.body.avgLossPercentage);
    this.request.body.minimumLoss = parseInt(this.request.body.minimumLoss);
    this.request.body.minimumLossPercentage = parseInt(this.request.body.minimumLossPercentage);
    this.request.body.maximumLoss = parseInt(this.request.body.maximumLoss);
    this.request.body.maximumLossPercentage = parseInt(this.request.body.maximumLossPercentage);
  }

}
