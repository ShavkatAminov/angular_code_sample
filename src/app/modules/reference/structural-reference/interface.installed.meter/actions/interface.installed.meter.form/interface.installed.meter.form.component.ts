import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClientService} from "../../../../../../shared/helpers/service/http/http.client.service";
import { TranslocoService } from '@ngneat/transloco';
import {BasicModalForm} from "../../../../../../shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {ReferenceDropDownRequest} from "../../../../basic/ReferenceDropDownRequest";
import {AlertServiceComponent} from "../../../../../../shared/helpers/alerts/services/alert.service.component";

@Component({
  templateUrl: './interface.installed.meter.form.component.html',
  styleUrls: ['./interface.installed.meter.form.component.scss']
})
export class InterfaceInstalledMeterFormComponent extends BasicModalForm {

  
  override form = new FormGroup({
    code: new FormControl(null, [Validators.required]),
    meterTypeId: new FormControl(null, [Validators.required]),
    meterSerialNumber: new FormControl(null, [Validators.required]),
    coefficient: new FormControl(null, [Validators.required]),
    lostAmount: new FormControl(null, []),
    sealSetupDate: new FormControl(null, []),
    sealNumber: new FormControl(null, []),
    standardSealDate: new FormControl(null, []),
    askueConnection: new FormControl(null, []),
    installationDate: new FormControl(null, []),
    sealedCalculationAmountActive: new FormControl(null, []),
    sealedCalculationAmountReactive: new FormControl(null, []),
    substationId: new FormControl(null, []),
    cableLineCode: new FormControl(null, []),
    part1: new FormControl(null, []),
    inputOutput1: new FormControl(null, []),
    part2: new FormControl(null, []),
    inputOutput2: new FormControl(null, []),
    agentId: new FormControl(null, [Validators.required]),
    status: new FormControl(true, [Validators.required]),
  });

  meterTypesRequest = new ReferenceDropDownRequest(ReferenceApiUrls.METER_TYPE);
  substationsRequest = new ReferenceDropDownRequest(ReferenceApiUrls.SUBSTATION);
  orcAgentsRequest = new ReferenceDropDownRequest(ReferenceApiUrls.ORC_AGENT);
  override request = new ReferenceFormRequest(ReferenceApiUrls.INTERFACE_INSTALLED_METER);
}
