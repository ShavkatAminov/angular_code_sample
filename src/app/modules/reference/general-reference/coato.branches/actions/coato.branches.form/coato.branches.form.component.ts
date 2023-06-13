import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {ReferenceApiUrls} from "../../../../referenceApiUrls";
import {ReferenceDropDownRequest} from "../../../../basic/ReferenceDropDownRequest";

@Component({
    templateUrl: './coato.branches.form.component.html',
    styleUrls: ['./coato.branches.form.component.scss']
})
export class CoatoBranchesFormComponent extends BasicModalForm {
    selectedLevelId: number = 1;


    override form = new FormGroup({
        nameUz: new FormControl(null, [Validators.required]),
        code: new FormControl(null, [Validators.required]),
        status: new FormControl(true, [Validators.required]),
        regionId: new FormControl(null, []),
        districtId: new FormControl(null, []),
        levelId: new FormControl(null, [Validators.required]),
    });

    override request = new ReferenceFormRequest(ReferenceApiUrls.COATO_BRANCHES);
    districtIdRequest = new ReferenceDropDownRequest(ReferenceApiUrls.DISTRICTS);
    regionRequest = new ReferenceDropDownRequest(ReferenceApiUrls.REGIONS);
    levelRequest = new ReferenceDropDownRequest(ReferenceApiUrls.MANAGEMENT_LEVELS);

    override setData(data: any) {
        if(data) {
            this.request.id = data;
            this.http.request(this.request, 'get').subscribe(res => {
                this.selectedLevelId = res['levelId'];
                this.form.patchValue(res);
            })
        }
    }

    onLevelChange(data) {
        if (data) {
            this.selectedLevelId = data;
        } else {
            this.selectedLevelId = 0;
            this.form.patchValue({
                regionId: null,
                districtId: null
            });

            this.form.get('regionId').clearValidators();
            this.form.get('districtId').clearValidators();
            this.form.get('regionId').updateValueAndValidity();
            this.form.get('districtId').updateValueAndValidity();
        }
    }

    onRegionChange(data) {
        const regionId = data || null;

        this.districtIdRequest = new ReferenceDropDownRequest(ReferenceApiUrls.DISTRICTS, {
            regionId: regionId
        });

        if(!data) this.form.patchValue({
            districtId: null
        })
    }
}
