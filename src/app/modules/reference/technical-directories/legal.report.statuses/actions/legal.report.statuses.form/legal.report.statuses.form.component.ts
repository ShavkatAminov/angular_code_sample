import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClientService} from "../../../../../../shared/helpers/service/http/http.client.service";
import {BasicModalForm} from "../../../../../../shared/helpers/form/modal/basic.modal.form";
import {TranslocoService} from "@ngneat/transloco";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {OptionsObj} from "../../../../../../shared/helpers/form/interfaces/options";
import {
  AccountingSettlementLCFormRequest
} from "../../../../../accounting-settlement-lc/basic/AccountingSettlementLCFormRequest";
import {
  AccountingSettlemenHCListRequest
} from "../../../../../accounting-settlement-hc/basic/AccountingSettlemenHCListRequest";
import {AccountingSettlementLCApiUrls} from "../../../../../accounting-settlement-lc/accountingSettlementLCApiUrls";
import {AlertServiceComponent} from "../../../../../../shared/helpers/alerts/services/alert.service.component";

@Component({
  selector: 'app-legal.report.statuses.form',
  templateUrl: './legal.report.statuses.form.component.html',
  styleUrls: ['./legal.report.statuses.form.component.scss']
})
export class LegalReportStatusesFormComponent extends BasicModalForm {
  

  override form = new FormGroup({
    nameUz: new FormControl(null, [Validators.required]),
    nameRu: new FormControl(null, []),
    nameCrl: new FormControl(null, []),
    code: new FormControl(null, [Validators.required]),
    status: new FormControl(null, [Validators.required]),
    name: new FormControl(null, []),
  });

  override request = new AccountingSettlementLCFormRequest(AccountingSettlementLCApiUrls.LEGAL_REPORT_STATUSES);

}
