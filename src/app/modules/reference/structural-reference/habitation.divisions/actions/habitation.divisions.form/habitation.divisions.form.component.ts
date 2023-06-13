import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {ReferenceListRequest} from "@app/modules/reference/basic/ReferenceListRequest";
import {ReferenceDropDownRequest} from "@app/modules/reference/basic/ReferenceDropDownRequest";

@Component({
  templateUrl: './habitation.divisions.form.component.html',
  styleUrls: ['./habitation.divisions.form.component.scss']
})
export class HabitationDivisionsFormComponent extends BasicModalForm {
   districtCode
  
  override form = new FormGroup({
    code:new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    nameUz: new FormControl(null, [Validators.required]),
    districtId: new FormControl(null, [Validators.required]),
    status: new FormControl(true, [Validators.required]),
   });



  handleDistrictChange (data) {
    if(data?.code)  {
      this.districtCode = data?.code
      this.form.patchValue({
        code:data?.code
      })
    }
    else this.districtCode = ""
  }

  district = {
    columns: [
      {
        headerName: 'GENERAL.DISTRICT',
        field: 'regionId',
        type: 'input',
        isPrimary: true,
        isFilter: false,
        isTable: false,
        isClickable: true,
        valueGetter: params => {
          return params.data?.code + '-' + params.data?.nameUz;
        },
        inputGetterFull: ({code, nameUz}) => {
          return `${code} - ${nameUz}`
        }
      },
      {
        field: 'code',
        headerName: 'GENERAL.CODE_DISTRICT',
        type: 'input',
        isPrimary: false,
        isFilter: false,
        isTable: true,
        isClickable: false,
      },
      {
        field: 'nameUz',
        headerName: 'GENERAL.DISTRICT',
        type: 'input',
        isPrimary: false,
        isFilter: false,
        isTable: true,
        isClickable: false,
      },
      {
        field: 'regions.code',
        headerName: 'GENERAL.CODE_REGION',
        type: 'input',
        isPrimary: false,
        isFilter: false,
        isTable: true,
        isClickable: false,

      },
      {
        field: 'regionId',
        headerName: 'GENERAL.REGION',
        type: 'autocomplete',
        options: new ReferenceDropDownRequest(ReferenceApiUrls.REGIONS),
        isPrimary: false,
        isFilter: true,
        isTable: false,
        isClickable: false,

      } ,
      {
        field: 'regions.nameUz',
        headerName: 'GENERAL.REGION',
        type: 'input',
        isPrimary: false,
        isFilter: false,
        isTable: true,
        isClickable: false,

      }
    ],
    styles: 'flex flex-col gap-y-2',
    request: new ReferenceListRequest(ReferenceApiUrls.DISTRICTS),
    returnField: 'id',
  }

  override request = new ReferenceFormRequest(ReferenceApiUrls.HABITATION_DIVISIONS);
}
