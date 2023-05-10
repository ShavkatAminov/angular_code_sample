import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TranslocoTestingModule} from "@ngneat/transloco";
import {BasicModalForm} from "@shared/helpers/form/modal/basic.modal.form";
import {FormGroup} from "@angular/forms";
import {OperatorTypeBindingFormComponent} from './operator.type.binding.form.component';
import {ReferenceDropDownRequest} from "../../../../basic/ReferenceDropDownRequest";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {SharedModule} from "@shared/shared.module";
import {AppModule} from "../../../../../../app.module";

import {imports} from "@test/imports";
import {login} from "@test/login";
describe('OperatorTypeBindingFormComponent', () => {
    let component: OperatorTypeBindingFormComponent;
    let fixture: ComponentFixture<OperatorTypeBindingFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        imports: imports,
            declarations: [OperatorTypeBindingFormComponent]
        }).compileComponents();
    login();

        fixture = TestBed.createComponent(OperatorTypeBindingFormComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should extend BasicModalForm', () => {
        expect(component instanceof BasicModalForm).toBeTruthy();
    });

    it('should have form of type FormGroup', () => {
        expect(component.form instanceof FormGroup).toBeTruthy();
    });

    it('should have request of type AccountingSettlemenHCFormRequest', () => {
        expect(component.request instanceof ReferenceFormRequest).toBeTruthy();
    });

    it('should have providerNameRequest of type AccountingSettlemenHCDropDownRequest', () => {
        expect(component.providerNameRequest instanceof ReferenceDropDownRequest).toBeTruthy();
    });


    it('should call beforeSave method and set request body with form values and parsed providerId', () => {
        component.form.controls['code'].setValue(1);
        component.form.controls['nameUz'].setValue('Test Name');
        component.form.controls['providerId'].setValue('1');
        component.form.controls['status'].setValue(true);
        component.form.controls['receiveSmsFromRes'].setValue(false);

        component.beforeSave();

        expect(component.request.body).toEqual({
            code: 1,
            nameUz: 'Test Name',
            providerId: 1,
            status: true,
            receiveSmsFromRes: false
        });
    });
});
