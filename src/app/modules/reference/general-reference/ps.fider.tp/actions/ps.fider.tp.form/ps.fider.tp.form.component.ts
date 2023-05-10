import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {ReferenceDropDownRequest} from "../../../../basic/ReferenceDropDownRequest";

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
    code: new FormControl(null, [Validators.required]),
    nameUz: new FormControl(null, [Validators.required]),
    psFiderTpTypeId: new FormControl(null, [Validators.required]),
    affiliationId: new FormControl(null, [Validators.required]),
    upSteamFiderId: new FormControl(null, []),
    capacity: new FormControl(null, [Validators.required]),
    status: new FormControl(true, [Validators.required]),
  });

  override request = new ReferenceFormRequest(ReferenceApiUrls.PS_FIDER_TP);
  psFiderTpType = new ReferenceDropDownRequest(ReferenceApiUrls.PS_FIDER_TP_TYPE)
  affiliation = new ReferenceDropDownRequest(ReferenceApiUrls.AFFILIATION)
  upSteamFider = new ReferenceDropDownRequest(ReferenceApiUrls.PS_FIDER_TP)

}
