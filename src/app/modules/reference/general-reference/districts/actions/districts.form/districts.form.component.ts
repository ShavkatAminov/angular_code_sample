import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceDropDownRequest} from "../../../../basic/ReferenceDropDownRequest";

@Component({
  selector: 'app-districts.form',
  templateUrl: './districts.form.component.html',
  styleUrls: ['./districts.form.component.scss']
})
export class DistrictsFormComponent extends BasicModalForm {
  regionCode:string = ""
  override form = new FormGroup({
    code: new FormControl(null, [Validators.required,Validators.minLength(7),Validators.maxLength(7)]),
    nameUz: new FormControl(null, [Validators.required]),
    regionId: new FormControl(null, [Validators.required]),
    status: new FormControl(true, [Validators.required]),
  });
  override request = new ReferenceFormRequest(ReferenceApiUrls.DISTRICTS);
  regionsRequest = new ReferenceDropDownRequest(ReferenceApiUrls.REGIONS);


  handleRegionSelect (data) {
    if(data?.code)  {
      this.regionCode = data?.code
      this.form.patchValue({
        code:data?.code
      })
    }
    else this.regionCode = ""
  }



  setData(data: any) {
    if(data) {
      this.request.id = data;
      this.http.request(this.request, 'get').subscribe((res: any) => {
        res['regionId'] = res.regions.id;
        this.form.patchValue(res);
      })
    }
  }
}
