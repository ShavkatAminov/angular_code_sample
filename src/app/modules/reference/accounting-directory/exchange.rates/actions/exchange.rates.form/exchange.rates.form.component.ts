import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {ReferenceDropDownRequest} from "../../../../basic/ReferenceDropDownRequest";

@Component({
  selector: 'app-exchange.rate.guide.form',
  templateUrl: './exchange.rates.form.component.html',
  styleUrls: ['./exchange.rates.form.component.scss']
})
export class ExchangeRatesFormComponent extends BasicModalForm{
  
  override form = new FormGroup({
    currencyId: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    exchangeRate: new FormControl(null, [Validators.required]),
    currencyUnit: new FormControl(null, [Validators.required]),
    activationDate: new FormControl(null, [Validators.required]),
    status: new FormControl(true, [Validators.required]),
  });

  override request = new ReferenceFormRequest(ReferenceApiUrls.EXCHANGE_RATES);
  currenciesAllRequest = new ReferenceDropDownRequest(ReferenceApiUrls.CURRENCIES);


  override beforeSave() {
    super.beforeSave();
    console.log(this.request.body);
    this.request.body.currencyId = parseInt(this.request.body.currencyId);
    this.request.body.exchangeRate = parseInt(this.request.body.exchangeRate);
    this.request.body.currencyUnit = parseInt(this.request.body.currencyUnit);
  }
}
