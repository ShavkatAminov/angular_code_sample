import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClientService} from "../../../../../../shared/helpers/service/http/http.client.service";
import {TranslocoService} from "@ngneat/transloco";
import {BasicModalForm} from "../../../../../../shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {ReferenceDropDownRequest} from "../../../../basic/ReferenceDropDownRequest";
import {AlertServiceComponent} from "../../../../../../shared/helpers/alerts/services/alert.service.component";

@Component({
  templateUrl: './ps.fider.tp.form.component.html',
  styleUrls: ['./ps.fider.tp.form.component.scss']
})
export class PsFiderTpFormComponent extends BasicModalForm implements OnInit {


  

  ngOnInit(): void {
    this.form.get('psFiderTpTypeId')?.valueChanges.subscribe(res => {
      let id = null;
      if(res === 2) {
        id = 1;
      }if(res === 1 || res === 3) {
        id = 2;
      }
      this.upSteamFider = this.upSteamFider.setBody({psFiderTpTypeId: id});
    })
  }
  override form = new FormGroup({
    nameUz: new FormControl(null, [Validators.required]),
    psFiderTpTypeId: new FormControl(null, [Validators.required]),
    affiliationId: new FormControl(null, [Validators.required]),
    upSteamSubstationId: new FormControl(null, [Validators.required]),
    coatoBranchId: new FormControl(null, [Validators.required]),
    upSteamFiderId: new FormControl(null, []),
    capacity: new FormControl(null, [Validators.required]),
    code: new FormControl(null, [Validators.required]),
    status: new FormControl(null, [Validators.required]),
  });

  override request = new ReferenceFormRequest(ReferenceApiUrls.PS_FIDER_TP);
  psFiderTpType = new ReferenceDropDownRequest(ReferenceApiUrls.PS_FIDER_TP_TYPE)
  affiliation = new ReferenceDropDownRequest(ReferenceApiUrls.AFFILIATION)
  upSteamSubstation = new ReferenceDropDownRequest(ReferenceApiUrls.SUBSTATION)
  coatoBranch = new ReferenceDropDownRequest(ReferenceApiUrls.COATO_BRANCHES)
  upSteamFider = new ReferenceDropDownRequest(ReferenceApiUrls.PS_FIDER_TP)

}
